"use client";
import { useEffect, useState } from "react";

const Newsletter = () => {
    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
        const canceled = localStorage.getItem("popupCanceled");
        if (canceled) {
            setShowPopup(false);
        }
    }, []);

    const donotShowAgain = (event) => {
        const canceled = event.target.checked;
        setShowPopup(!canceled);
        localStorage.setItem("popupCanceled", canceled ? "true" : "");
    };
    if (!showPopup) {
        return null;
    }
    return (
        <div>
            <div className="popup_wrapper">
                <div className="test">
                    <span className="popup_off">
                        <i className="ion-android-close" />
                    </span>
                    <div className="subscribe_area">
                        <h2>Sign Up Newsletter</h2>
                        <p>
                            Subscribe to the our store mailing list to receive
                            updates on new arrivals, special offers and other
                            discount information.
                        </p>
                        <div className="subscribe-form-group">
                            <form className="subscribe-form" action="#">
                                <input
                                    autoComplete="off"
                                    type="text"
                                    name="message"
                                    id="message"
                                    placeholder="Enter your email address"
                                />
                                <button type="submit">subscribe</button>
                            </form>
                        </div>
                        <div className="subscribe-bottom">
                            <input
                                type="checkbox"
                                id="newsletter-permission"
                                onChange={donotShowAgain}
                            />
                            <label htmlFor="newsletter-permission">
                                Don't show this popup again
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
