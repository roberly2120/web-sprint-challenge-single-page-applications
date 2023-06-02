import React from "react";

export default function Confirmation(props) {
    const { values, done, edit } = props
    return (
        <div>
            <div className="confirmation-title">
                <h2>Thank you for your order, your pizza is on the way!</h2>
                <h4>Review your order</h4>
            </div>
            <div className="order-review">
                <p>Name: {values.name}</p>
                <p>Size: {values.size}</p>
                <p>Sauce: {values.sauce}</p>
                <p>Pepperoni: {values.pepperoni}</p>
                <p>Mushrooms: {values.mushrooms}</p>
                <p>Olives: {values.olives}</p>
                <p>Pineapple: {values.pineapple}</p>
                <p>Special Instructions:<br/>{values.special}</p>
            </div>
            <div>
                <button onClick={edit}>Edit Order</button>&nbsp;
                <button onClick={done}>Done</button>
            </div>
        </div>
    )
}