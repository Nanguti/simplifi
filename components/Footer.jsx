import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      {" "}
      {/* Begin Simplifi Networks Footer Area */}
      <div className="uren-footer_area">
        <div className="footer-top_area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="newsletter-area">
                  <h3 className="title">Join Our Newsletter Now</h3>
                  <p className="short-desc">
                    Get E-mail updates about our latest productsand special
                    offers.
                  </p>
                  <div className="newsletter-form_wrap">
                    <form
                      action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"
                      method="post"
                      id="mc-embedded-subscribe-form"
                      name="mc-embedded-subscribe-form"
                      className="newsletters-form validate"
                      target="_blank"
                      noValidate=""
                    >
                      <div id="mc_embed_signup_scroll">
                        <div id="mc-form" className="mc-form subscribe-form">
                          <input
                            id="mc-email"
                            className="newsletter-input"
                            type="email"
                            autoComplete="off"
                            placeholder="Enter your email"
                          />
                          <button className="newsletter-btn" id="mc-submit">
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle_area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-widgets_info">
                  <div className="footer-widgets_logo">
                    <Link href="#">
                      <img
                        src="/assets/images/menu/logo/1.png"
                        alt="Simplifi Networks Footer Logo"
                      />
                    </Link>
                  </div>
                  <div className="widget-short_desc">
                    <p>
                      Simplifi Networks is a leading supplier of cutting-edge
                      technologies like Wireless Broadband, Wi-Fi, Networking,
                      VoIP, Fibre, and IP Video. We provide top-quality
                      products, extensive support, and financing solutions. Our
                      East African partners in Kenya, Uganda, Tanzania,
                      Ethiopia, Congo, DRC, Sudan, and Rwanda trust us for
                      exceptional service. Our brands include Ubiquiti,
                      MikroTik, RUIJIE, and more.
                    </p>
                  </div>
                  <div className="widgets-essential_stuff">
                    <ul>
                      <li className="uren-address">
                        <span>Address:</span> The Barn, Ullenhall, Henley in
                        Arden B578 5CC, England
                      </li>
                      <li className="uren-phone">
                        <span>Call Us:</span>{" "}
                        <Link href="tel://+123123321345">+123 321 345</Link>
                      </li>
                      <li className="uren-email">
                        <span>Email:</span>{" "}
                        <Link href="mailto://info@yourdomain.com">
                          info@yourdomain.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="uren-social_link">
                    <ul>
                      <li className="facebook">
                        <Link
                          href="https://www.facebook.com/"
                          data-toggle="tooltip"
                          target="_blank"
                          title="Facebook"
                        >
                          <i className="fab fa-facebook" />
                        </Link>
                      </li>
                      <li className="twitter">
                        <Link
                          href="https://twitter.com/"
                          data-toggle="tooltip"
                          target="_blank"
                          title="Twitter"
                        >
                          <i className="fab fa-twitter-square" />
                        </Link>
                      </li>
                      <li className="google-plus">
                        <Link
                          href="https://www.plus.google.com/discover"
                          data-toggle="tooltip"
                          target="_blank"
                          title="Google Plus"
                        >
                          <i className="fab fa-google-plus" />
                        </Link>
                      </li>
                      <li className="instagram">
                        <Link
                          href="https://rss.com/"
                          data-toggle="tooltip"
                          target="_blank"
                          title="Instagram"
                        >
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="footer-widgets_area">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="footer-widgets_title">
                        <h3>Information</h3>
                      </div>
                      <div className="footer-widgets">
                        <ul>
                          <li>
                            <Link href="#">About Us</Link>
                          </li>
                          <li>
                            <Link href="#">
                              Delivery Information
                            </Link>
                          </li>
                          <li>
                            <Link href="#">Privacy Policy</Link>
                          </li>
                          <li>
                            <Link href="#">
                              Terms &amp; Conditions
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="footer-widgets_title">
                        <h3>Customer Service</h3>
                      </div>
                      <div className="footer-widgets">
                        <ul>
                          <li>
                            <Link href="#">Contact Us</Link>
                          </li>
                          <li>
                            <Link href="#">Returns</Link>
                          </li>
                          <li>
                            <Link href="#">Site Map</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="footer-widgets_title">
                        <h3>Extras</h3>
                      </div>
                      <div className="footer-widgets">
                        <ul>
                          <li>
                            <Link href="#">About Us</Link>
                          </li>
                          <li>
                            <Link href="#">
                              Delivery Information
                            </Link>
                          </li>
                          <li>
                            <Link href="#">Privacy Policy</Link>
                          </li>
                          <li>
                            <Link href="#">
                              Terms &amp; Conditions
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="footer-widgets_title">
                        <h3>My Account</h3>
                      </div>
                      <div className="footer-widgets">
                        <ul>
                          <li>
                            <Link href="#">My Account</Link>
                          </li>
                          <li>
                            <Link href="#">Order History</Link>
                          </li>
                          <li>
                            <Link href="#">Wish List</Link>
                          </li>
                          <li>
                            <Link href="#">Newsletter</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom_area">
          <div className="container-fluid">
            <div className="footer-bottom_nav">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="copyright">
                    <span>
                      <Link href="Simplifinetworks.net">Simplifinetworks</Link>
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="payment">
                    <Link href="#">
                      <img
                        src="assets/images/footer/payment/1.png"
                        alt="Simplifi Networks Payment Method"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Simplifi Networks Footer Area End Here */}
      {/* Begin Simplifi Networks Modal Area */}
      <div className="modal fade modal-wrapper" id="exampleModalCenter">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="modal-inner-area sp-area row">
                <div className="col-lg-5">
                  <div className="sp-img_area">
                    <div
                      className="sp-img_slider slick-img-slider uren-slick-slider"
                      data-slick-options='{
                                "slidesToShow": 1,
                                "arrows": false,
                                "fade": true,
                                "draggable": false,
                                "swipe": false,
                                "asNavFor": ".sp-img_slider-nav"
                                }'
                    >
                      <div className="single-slide red">
                        <img
                          src="assets/images/product/large-size/1.jpg"
                          alt="Simplifi Networks Product Image"
                        />
                      </div>
                      <div className="single-slide orange">
                        <img
                          src="assets/images/product/large-size/2.jpg"
                          alt="Simplifi Networks Product Image"
                        />
                      </div>
                      <div className="single-slide brown">
                        <img
                          src="assets/images/product/large-size/3.jpg"
                          alt="Simplifi Networks Product Image"
                        />
                      </div>
                      <div className="single-slide umber">
                        <img
                          src="assets/images/product/large-size/4.jpg"
                          alt="Simplifi Networks Product Image"
                        />
                      </div>
                      <div className="single-slide black">
                        <img
                          src="assets/images/product/large-size/5.jpg"
                          alt="Simplifi Networks Product Image"
                        />
                      </div>
                      <div className="single-slide golden">
                        <img
                          src="assets/images/product/large-size/6.jpg"
                          alt="Simplifi Networks Product Image"
                        />
                      </div>
                    </div>
                    <div
                      className="sp-img_slider-nav slick-slider-nav uren-slick-slider slider-navigation_style-3"
                      data-slick-options='{
                               "slidesToShow": 4,
                                "asNavFor": ".sp-img_slider",
                               "focusOnSelect": true,
                               "arrows" : true,
                               "spaceBetween": 30
                              }'
                      data-slick-responsive='[
                                {"breakpoint":1501, "settings": {"slidesToShow": 3}},
                                {"breakpoint":992, "settings": {"slidesToShow": 4}},
                                {"breakpoint":768, "settings": {"slidesToShow": 3}},
                                {"breakpoint":575, "settings": {"slidesToShow": 2}}
                            ]'
                    >
                      <div className="single-slide red">
                        <img
                          src="assets/images/product/small-size/1.jpg"
                          alt="Simplifi Networks Product Thumnail"
                        />
                      </div>
                      <div className="single-slide orange">
                        <img
                          src="assets/images/product/small-size/2.jpg"
                          alt="Simplifi Networks Product Thumnail"
                        />
                      </div>
                      <div className="single-slide brown">
                        <img
                          src="assets/images/product/small-size/3.jpg"
                          alt="Simplifi Networks Product Thumnail"
                        />
                      </div>
                      <div className="single-slide umber">
                        <img
                          src="assets/images/product/small-size/4.jpg"
                          alt="Simplifi Networks Product Thumnail"
                        />
                      </div>
                      <div className="single-slide black">
                        <img
                          src="assets/images/product/small-size/5.jpg"
                          alt="Simplifi Networks Product Thumnail"
                        />
                      </div>
                      <div className="single-slide golden">
                        <img
                          src="assets/images/product/small-size/6.jpg"
                          alt="Simplifi Networks Product Thumnail"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6">
                  <div className="sp-content">
                    <div className="sp-heading">
                      <h5>
                        <Link href="#">NanoBeam AC</Link>
                      </h5>
                    </div>
                    <div className="sp-essential_stuff">
                      <p> Simple plug and play installation</p>
                      <p> Versatile mounting options.</p>
                      <p> Improved noise immunity</p>
                      <p> Lower latency</p>
                      <p> Increased throughput</p>
                      <p> Easy configuration.</p>
                    </div>
                    <div className="uren-tag-line">
                      <h6>Share:</h6>
                    </div>
                    <div className="uren-social_link">
                      <ul>
                        <li className="facebook">
                          <Link
                            href="https://www.facebook.com/"
                            data-toggle="tooltip"
                            target="_blank"
                            title="Facebook"
                          >
                            <i className="fab fa-facebook" />
                          </Link>
                        </li>
                        <li className="twitter">
                          <Link
                            href="https://twitter.com/"
                            data-toggle="tooltip"
                            target="_blank"
                            title="Twitter"
                          >
                            <i className="fab fa-twitter-square" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Simplifi Networks Modal Area End Here */}
    </div>
  );
};

export default Footer;
