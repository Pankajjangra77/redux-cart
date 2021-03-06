import React from "react";

function Home(props) {
    console.warn("home", props.data)
    return<div>
    <h1>Home Component</h1>
    <div className="cart-wrapper">
        <div className="img-wrapper item">
            <img src="https://www.91-img.com/pictures/97744-v1-apple-iphone-7-mobile-phone-large-1.jpg?tr=q-60" alt = "cart" />
        </div>
        <div className="text-wrapper item">
            <span>
                I-Phone
            </span>
            <span>
                Price: $1000.00
            </span>
        </div>
        <div className="btn-wrapper item">
            <button 
            onClick={
                ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                }>
                Add To Cart</button>
            <button 
            onClick={
                ()=>{props.removeToCartHandler()}
            }>
                Remove To Cart</button>
        </div>
    </div>
</div>
}

export default Home;