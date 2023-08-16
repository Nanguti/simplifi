import React from "react";
import Link from "next/link";

const Contact = () => {
    return (
        <>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <h2>Other</h2>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li className="active">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="contact-main-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 order-1 order-lg-2">
                            <h3 className="contact-page-title">
                                Nairobi, Kenya
                            </h3>
                            <div style={{ width: "100%" }}>
                                <iframe
                                    width="100%"
                                    height={400}
                                    frameBorder={0}
                                    scrolling="no"
                                    marginHeight={0}
                                    marginWidth={0}
                                    src="https://maps.google.com/maps?width=100%25&height=400&hl=en&q=Unit%2028,%20Fortis%20Industrial%20park,%20off%20Mombasa%20Road+(Simplifi%20Networks)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                                >
                                    &lt;a
                                    href="https://www.maps.ie/distance-area-calculator.html"&gt;measure
                                    acres/hectares on map&lt;/a&gt;
                                </iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                            <h3 className="contact-page-title">
                                Kampala, Uganda
                            </h3>
                            <div style={{ width: "100%" }}>
                                <iframe
                                    width="100%"
                                    height={400}
                                    frameBorder={0}
                                    scrolling="no"
                                    marginHeight={0}
                                    marginWidth={0}
                                    src="https://maps.google.com/maps?width=100%25&height=400&hl=en&q=13%20C/A%20Bazarabusa%20Rd%20(Luthuli%20Drive),%20Bugolobi+(Simplifi%20Networks)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                                >
                                    &lt;a
                                    href="https://www.maps.ie/distance-area-calculator.html"&gt;area
                                    maps&lt;/a&gt;
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 offset-lg-1 col-md-12 order-1 order-lg-2">
                            <div className="contact-page-side-content">
                                <h3 className="contact-page-title">
                                    Contact Us
                                </h3>
                                <p className="contact-page-message">
                                    Kkenyan &amp; Ugandan Contacts
                                </p>
                                <div className="single-contact-block">
                                    <h4>
                                        <i className="fa fa-fax" /> Address
                                    </h4>
                                    <p>
                                        Uganda: 13 C/A Bazarabusa Rd (Luthuli
                                        Drive), Bugolobi
                                    </p>
                                    <p>
                                        Kenya: Unit 28, Fortis Industrial park,
                                        off Mombasa Road
                                    </p>
                                </div>
                                <div className="single-contact-block">
                                    <h4>
                                        <i className="fa fa-phone" /> Phone
                                    </h4>
                                    <p>Uganda: +256 758 937 003</p>
                                    <p>Kenya: +254 727 401 262</p>
                                </div>
                                <div className="single-contact-block last-child">
                                    <h4>
                                        <i className="fa fa-envelope-o" /> Email
                                    </h4>
                                    <p>Uganda: uganda@simplifinetworks.com</p>
                                    <p>Kenya: kenya@simplifinetworks.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                            <div className="contact-form-content">
                                <h3 className="contact-page-title">
                                    Tell Us Your Message
                                </h3>
                                <div className="contact-form">
                                    <form
                                        id="contact-form"
                                        action="http://hasthemes.com/file/mail.php"
                                        method="post"
                                    >
                                        <div className="form-group">
                                            <label>
                                                Your Name{" "}
                                                <span className="required">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                name="con_name"
                                                id="con_name"
                                                required=""
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Your Email{" "}
                                                <span className="required">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="email"
                                                name="con_email"
                                                id="con_email"
                                                required=""
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Subject</label>
                                            <input
                                                type="text"
                                                name="con_subject"
                                                id="con_subject"
                                            />
                                        </div>
                                        <div className="form-group form-group-2">
                                            <label>Your Message</label>
                                            <textarea
                                                name="con_message"
                                                id="con_message"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <button
                                                type="submit"
                                                value="submit"
                                                id="submit"
                                                className="uren-contact-form_btn"
                                                name="submit"
                                            >
                                                send
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <p className="form-messege" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
