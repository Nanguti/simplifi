'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axiosClient from "@/utils/axios";
const Sidebar = () => {
    const router = useRouter()
  const [brands, setBrands] = useState([])
  useEffect(() => {
    fetchMenuItems("/menu-items");
  }, []);

  const fetchMenuItems = async (url) => {
    try {
      const response = await axiosClient.get(url);
      setBrands(response.data.brands);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleProductsByBrand = (slug)=>{
    router.push(`/brand/${slug}`);
  }
    return (
        <>
            <div className="uren-sidebar-catagories_area">
                <div className="category-module uren-sidebar_categories">
                    <div className="category-module_heading">
                        <h5>Categories</h5>
                    </div>
                    <div className="module-body">
                        <ul className="module-list_item">
                            <li>
                                <Link href="">Consoles </Link>
                                <Link href="indoor-access-points-wifi-5.html">
                                    WiFi{" "}
                                </Link>
                                <Link href="#">
                                    Routing &amp; Switching{" "}
                                </Link>
                                <Link href="protect.html">Protect </Link>
                                <Link href="#">UISP </Link>
                                <Link href="#">LTU </Link>
                                <Link href="#">Accessories </Link>
                                <Link href="#">Routers </Link>
                                <Link href="#">Switches </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="uren-sidebar_categories">
                    <div className="uren-categories_title">
                        <h5>Top Manufacturers</h5>
                    </div>
                    <ul className="sidebar-checkbox_list">
                        {brands.map((brand)=>
                        <li>
                            <a className="cursor-pointer" onClick={()=> handleProductsByBrand(brand.slug) } >
                                {brand.title} <span></span>
                            </a>
                        </li>
                        )}
                        
                        
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
