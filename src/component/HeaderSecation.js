import React from "react";
import './HeaderSecation.css'
import img from './img/logo.png';
import Button from "./Button";

const HeaderSecation = () =>{
    return(
        <>
            {
                // header section start
                <div className="header_section">

                    <div className="div1">
                        <img src={img} alt="Logo"height="35px" width="35px" />
                        <h2 className="h2">GeekFoods</h2>
                    </div>

                    <div className="div2">
                        <ul className="links">
                            <li><a href="Home" className="li col">Home</a></li>
                            <li><a href="Quote" className="li">Quote</a></li>
                            <li><a href="Resturants" className="li">Resturants</a></li>
                            <li><a href="Foods" className="li">Foods</a></li>
                            <li><a href="Contact" className="li">Contact</a></li>
                        </ul>
                    </div>

                    <Button fontfamily={"Segoe UI"} cursor={"pointer"} fontsize={"14px"} fontweight={"500"} color={"white"} backgroundColor= {"#2155c6"} border={"none"} padding={"0.5rem 1.2rem"} borderradius={"8px"} >Get started</Button>
                </div>
            }
        </>
    );
}

export default HeaderSecation;