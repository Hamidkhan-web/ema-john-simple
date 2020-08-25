import React from 'react';
import Product from '../Product/Product';

const Cart = (props) => {
    const cart = props.cart;
    //const totalPrice = cart.reduce((total, Prd) => total + prd.price, 0);

//const total = cart.reduce((tatal, prd) => tatal + prd.price , 0)
let total = 0;
for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
    
}
let shipping = 0;
if(total > 35){
    shipping = 0;
}
else if(total > 15){
    shipping = 4.99;
}
else if(total > 0){
    shipping = 12.99
}
const tax = Math.round(total / 10).toFixed(2);
const grandTotal = (total + shipping + Number(tax)).toFixed(2);

const formatNumber = num => {
    const precision = num.toFixed(2);
    return Number(precision)
}

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length} </p>
            <p>Product Price:{formatNumber(total)}</p>
            <p><small>Shiping Cost:{shipping}</small></p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;