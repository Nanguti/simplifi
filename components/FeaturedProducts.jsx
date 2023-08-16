"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import parse from "html-react-parser";

const FeaturedProducts = ({ products, file_url }) => {
  const sliderRef = useRef(null);
  const router = useRouter();
  const handleProductDetail = (slug) => {
    router.push(`products/${slug}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider ref={sliderRef} {...settings}>
      {products.map((product) => (
        <div className="slide-item " key={product.id}>
          <div className="slide-inner slider-item-space">
            <div className="slide-image_area">
              <a
                onClick={() => handleProductDetail(product.slug)}
                className="cursor-pointer"
              >
                <img src={`${file_url}/${product.photo}`} alt={product.title} />
              </a>
            </div>
            <div className="slide-content_area">
              <h3>
                <a
                  onClick={() => handleProductDetail(product.slug)}
                  className="cursor-pointer"
                >
                  {parse(product.title)}
                </a>
              </h3>
              {parse(product.summary)}
              <div className="uren-btn-ps_left">
                <a
                  className="uren-btn cursor-pointer"
                  onClick={() => handleProductDetail(product.slug)}
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default FeaturedProducts;
