import React from 'react';
import './../stylesheet/pages/Pricing.css'
import StripeCheckout from 'react-stripe-checkout'
import {database, auth} from '../firebase'
import { buyMonthlyPro } from '../components/Stripe/buyMonthlyPro'
import { testPublishableKey } from '../stripe'
import Logo from './../assets/images/logo.png'
import { useAuth } from './../contexts/AuthContext'
import { Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Pricing() {

    const { currentUser } = useAuth()

    function HandleToken(token, addresses) {

    }

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
                <div className="plan-select">
                    {currentUser ? 
                        <StripeCheckout 
                            className="pricing-stripe-button1"
                            stripeKey={testPublishableKey}
                            label="SELECT PLAN"
                            style={{ 
                                color: 'black',
                                fontFamily: 'Arial',
                                fontSize: "67px",
                                textAlign: 'center',
                                top: '0px'
                            }}
                            amount="500"
                            name="Pro Monthly Subscription"
                            image = {Logo}
                            description = "Subscribe for $5/month"
                            panelLabel="Pay {{amount}}"
                            locale="auto"
                            billingAddress
                        />
                        : 
                        <a href="/signup">sign up</a>
                    } 
                </div>
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
                <div className="plan-select">
                    {currentUser ? 
                        <StripeCheckout 
                            className="pricing-stripe-button1"
                            stripeKey={testPublishableKey}
                            label="SELECT PLAN"
                            style={{ 
                                color: 'black',
                                fontFamily: 'Arial',
                                fontSize: "67px",
                                textAlign: 'center',
                                top: '0px'
                            }}
                            amount="500"
                            name="Pro Monthly Subscription"
                            image = {Logo}
                            description = "Subscribe for $5/month"
                            panelLabel="Pay {{amount}}"
                            locale="auto"
                            billingAddress
                        />
                        : 
                        <a href="/signup">sign up</a>
                    } 
                </div>
            </div>
            <div className="plan featured">
                <header>
                <h4 className="plan-title">
                    
                    👑 Yearly Pro
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
                <div className="plan-select">
                    {currentUser ? 
                        <StripeCheckout 
                            className="pricing-stripe-button1"
                            stripeKey={testPublishableKey}
                            label="SELECT PLAN"
                            style={{ 
                                color: 'black',
                                fontFamily: 'Arial',
                                fontSize: "67px",
                                textAlign: 'center',
                                top: '0px',
                            }}
                            amount="500"
                            name="Pro Monthly Subscription"
                            image = {Logo}
                            description = "Subscribe for $5/month"
                            panelLabel="Pay {{amount}}"
                            locale="auto"
                            billingAddress
                        />
                        : 
                        <a href="/signup">sign up</a>
                    } 
                </div>
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
                <div className="plan-select">
                    {currentUser ? 
                        <StripeCheckout 
                            className="pricing-stripe-button1"
                            stripeKey={testPublishableKey}
                            label="SELECT PLAN"
                            style={{ 
                                color: 'black',
                                fontFamily: 'Arial',
                                fontSize: "67px",
                                textAlign: 'center',
                                top: '0px'
                            }}
                            amount="500"
                            name="Pro Monthly Subscription"
                            image = {Logo}
                            description = "Subscribe for $5/month"
                            panelLabel="Pay {{amount}}"
                            locale="auto"
                            billingAddress
                        />
                        : 
                        <a href="/signup">sign up</a>
                    } 
                </div>
            </div>

            </div>  

        </div>
    )
}
