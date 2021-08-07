import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import ListCard from "./listCard";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

function Baitap3() {
    return (
        <div className="bg-dark">
            <Header />
            <Carousel />
            <ListCard />
            <Footer />
        </div>
    );
}

export default Baitap3;