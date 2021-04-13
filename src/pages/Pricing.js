import React from 'react';
import './../stylesheet/pages/Pricing.css'

const TITLE = "SOME1 | Pricing"

export default function Pricing() {
    return (
        <div className="body-pricing">
            <div className="snip1517">
            <h1 className="pricing-title">Choose the plan that’s right for you.</h1>
            <div className="plan">
                <header>
                <h4 className="plan-title">
                    
                    Free
                </h4>
                <div className="plan-cost"><span className="plan-price">$0</span><span className="plan-type">/month</span></div>
                </header>
                <ul className="plan-features">
                <li><i className="ion-android-remove"> </i>Access to +100 challenges</li>
                <li><i className="ion-android-remove"> </i>5 MySQL Databases</li>
                <li><i className="ion-android-remove"> </i>Unlimited Email</li>
                <li><i className="ion-android-remove"> </i>250Gb mo Transfer</li>
                <li><i className="ion-android-remove"> </i>24/7 Tech Support</li>
                <li><i className="ion-android-remove"> </i>Daily Backups</li>
                </ul>
                <div className="plan-select"><a href="">Select Plan</a></div>
            </div>
            <div className="plan">
                <header>
                <h4 className="plan-title">
                    
                    Monthly Pro
                </h4>
                <div className="plan-cost"><span className="plan-price">$5</span><span className="plan-type">/month</span></div>
                </header>
                <ul className="plan-features">
                <li><i className="ion-android-remove"> </i>Access to All Pro Courses</li>
                <li><i className="ion-android-remove"> </i>250+ Challenges</li>
                <li><i className="ion-android-remove"> </i>Video Explanations</li>
                <li><i className="ion-android-remove"> </i>500Gb mo Transfer</li>
                <li><i className="ion-android-remove"> </i>24/7 Tech Support</li>
                <li><i className="ion-android-remove"> </i>Cancel Anytime</li>
                </ul>
                <div className="plan-select"><a href="">Select Plan</a></div>
            </div>
            <div className="plan featured">
                <header>
                <h4 className="plan-title">
                    
                    Yearly Pro
                </h4>
                <div className="plan-cost"><span className="plan-price">$3</span><span className="plan-type">/month</span></div>
                </header>
                <ul className="plan-features">
                <li><i className="ion-android-remove"> </i>25GB Linux Web Space</li>
                <li><i className="ion-android-remove"> </i>25 MySQL Databases</li>
                <li><i className="ion-android-remove"> </i>Unlimited Email</li>
                <li><i className="ion-android-remove"> </i>2000Gb mo Transfer</li>
                <li><i className="ion-android-remove"> </i>24/7 Tech Support</li>
                <li><i className="ion-android-remove"> </i>Daily Backups</li>
                </ul>
                <div className="plan-select"><a href="">Select Plan</a></div>
            </div>
            <div className="plan">
                <header>
                <h4 className="plan-title">
                    
                    Lifetime Pro
                </h4>
                <div className="plan-cost"><span className="plan-price">$60</span></div>
                </header>
                <ul className="plan-features">
                <li><i className="ion-android-remove"> </i>100GB Linux Web Space</li>
                <li><i className="ion-android-remove"> </i>Unlimited MySQL Databases</li>
                <li><i className="ion-android-remove"> </i>Unlimited Email</li>
                <li><i className="ion-android-remove"> </i>10000Gb mo Transfer</li>
                <li><i className="ion-android-remove"> </i>24/7 Tech Support</li>
                <li><i className="ion-android-remove"> </i>Daily Backups</li>
                </ul>
                <div className="plan-select"><a href="">Select Plan</a></div>
            </div>
            </div>
        </div>
    )
}
