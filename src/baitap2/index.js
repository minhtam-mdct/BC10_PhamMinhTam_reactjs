import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import WhatWeDo from "./wwd";
import Contact from "./contact";
import ListCard from "./listCard";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

function Baitap2() {
    return (
        <>
            <Header />
            <Carousel />
            <div className="container">
                <div className="row">
                    <WhatWeDo />
                    <Contact />
                </div>

                <ListCard />
            </div>
            <Footer />
        </>
    );
}

export default Baitap2;