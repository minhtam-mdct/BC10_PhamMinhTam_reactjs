import React from "react";
import Card from "./card";

function ListCard() {
    return <section className="container-fluid pt-5 pb-5">
    <h1 className="text-white text-center">BEST SMARTPHONE</h1>
    <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
    </section>
}

export default ListCard;