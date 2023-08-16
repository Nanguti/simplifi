"use client";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { useRouter } from "next/navigation";

const Brands = ({ brands, file_url }) => {
  const sliderRef = useRef(null);
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleProductsByBrand = (slug) => {
    router.push(`/brand/${slug}`);
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {brands.map((brand) => (
        <div className="slide-item" key={brand.id}>
          <div className="inner-slide">
            <div className="single-product">
              <a className="cursor-pointer" onClick={()=>handleProductsByBrand(brand.slug)}>
                <img src={`${file_url}/${brand.photo}`} alt={brand.title} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Brands;
