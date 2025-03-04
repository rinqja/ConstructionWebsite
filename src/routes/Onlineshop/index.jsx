import React from "react";
import "./Onlineshop.scss";
import Online1 from "../../assets/imges/online1.svg";
import Online2 from "../../assets/imges/online2.svg";
import Online3 from "../../assets/imges/onlinemobile1.svg";
import Online4 from "../../assets/imges/onlinemobile2.svg";
import Logo1 from "../../assets/imges/logo1.svg";

export default function Onlineshop() {
    return (
        <div className="container">
            <div className="one-half">
                <a href="/fuhrbetriebform">
                    <div className="content">
                        <div className="background1">
                            <img src={Online1} alt="Online Shop" />
                            <div className="title">
                                <h1>FUHRBETRIEB</h1> 
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="two-half">
                <a href="containerform">
                    <div className="content">
                        <div className="background">
                            <img src={Online2} alt="Online Shop" />
                            <div className="title1">
                                <h1>CONTAINER- <br />VERMIETUNG</h1>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="logos-mobile">
                <a href="/">
                    <img src={Online3} alt="Logo 1-1" /> {"                             "}
                    <img className="online-shop-2" src={Online4} alt="Online Shop" />
                </a>
            </div>
            <div className="logos">
                <a href="/">
                    <img src={Logo1} alt="Logo 1" />
                  
                </a>
            </div>
        </div>
    );
}