"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";

const Banners = ({ banners, file_url }) => {
    return (
        <Carousel
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}
        >
            {banners.map((banner, index) => (
                <div
                    key={index}
                    className="single-slide animation-style-01 bg-1"
                    style={{
                        backgroundImage: `url('${file_url}/${banner.photo}')`,
                    }}
                >
                    <div className="slider-content">
                        <span>Ubiquiti U6-Pro Unifi 6-Pro Access</span>
                        <h3 className="banner-text">Point</h3>
                        <h4 className="banner-text">High client capacity</h4>
                        <div className="uren-btn-ps_left slide-btn">
                            <Link className="uren-btn" href="#">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default Banners;
