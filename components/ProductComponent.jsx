"use client";
import React, { useState } from "react";

const ProductComponent = ({ photo, images }) => {
  const file_url = process.env.NEXT_PUBLIC_STORAGE_URL;
  const [mainImage, setMainImage] = useState(0);
  // const images = [
  //   "/assets/images/product/large-size/1.jpg",
  //   "/assets/images/product/large-size/2.jpg",
  //   "/assets/images/product/large-size/3.jpg",
  //   "/assets/images/product/large-size/4.jpg",
  //   // Add more image URLs as needed
  // ];

  const handlePrevious = () => {
    setMainImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setMainImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="product-detail-container">
      <div className="main-image-container">
        <img
          src={`${file_url}/${photo}`}
          alt={`Product Image ${mainImage + 1}`}
          className="main-image"
        />
      </div>
      {images.length > 0 && (
        <div className="thumbnails">
          {images.map((image, index) => (
            <div key={index} className="image-card">
              <img
                src={image.original_url}
                alt={`Product Image ${index + 1}`}
                className={`thumbnail ${mainImage === index ? "active" : ""}`}
                onClick={() => setMainImage(index)}
              />
            </div>
          ))}
        </div>
      )}
      {/* <div className="arrows">
        <span className="arrow left-arrow" onClick={handlePrevious}>
          {"<"}
        </span>
        <span className="arrow right-arrow" onClick={handleNext}>
          {">"}
        </span>
      </div> */}
      <style jsx>{`
        .product-detail-container {
          display: flex;
          border: 2px solid #ffc400;
          border-radius: 5px;
          flex-direction: column;
          align-items: center;
          gap: 5px;
        }

        .main-image-container {
          position: relative;
          width: 400px;
          height: 400px;
          overflow: hidden;
        }

        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .main-image:hover {
          transform: scale(1.2);
        }

        .thumbnails {
          display: flex;
          gap: 10px;
          margin-top: -50px;
        }

        .image-card {
          width: 100px;
          height: 100px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease;
          position: relative;
          z-index: 1;
        }

        .thumbnail {
          width: 100%;
          height: 100%;
          cursor: pointer;
          opacity: 0.6;
          transition: opacity 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .thumbnail.active {
          opacity: 1;
          position: relative;
          z-index: 2;
        }

        .arrows {
          display: flex;
          gap: 20px;
        }

        .arrow {
          cursor: pointer;
          font-size: 24px;
        }
      `}</style>
    </div>
  );
};

export default ProductComponent;
