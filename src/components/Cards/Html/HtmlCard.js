import React from 'react'

import './../../../style/components/Cards/Html/base.css'
import './../../../style/components/Cards/Html/HtmlCard.css'

import HtmlLogo from './../../../assets/logos/HtmlLogo.png'

export default function HtmlCard() {
    return (
        <div className="card-HtmlCard">
            <div className="card-contents-HtmlCard">
                
                <img 
                    src={HtmlLogo} 
                    height={125}
                    className="logo-HtmlCard" 
                    alt="Logo HTML"
                />
                
                <h4 className="title-HtmlCard">
                    HTML
                </h4>

                <p className="description-HtmlCard">
                    The language used to create web pages.
                </p>

                <a 
                    href="/"
                    className="button-HtmlCard"
                >
                    <div className="button-text-HtmlCard">
                        Learn HTML
                    </div>
                </a>
                
            </div>
        </div>
    )
}
