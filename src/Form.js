import React from 'react'
import style from './App.css'

export default function Form(props) {
    const { values, change, submit, disabled, errors, clickHome } = props;

    const onChange = event => {
        const { name, value, checked, type } = event.target;
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
    }
    const onSubmit = event => {
        event.preventDefault();
        submit();
    }
    return (

        <form id="pizza-form" onSubmit={onSubmit}>
            <div className='form-header'>
                <h2>Build Your Pizza Below</h2>
            </div>
            <div className='choice-title size'>
                <h3>Choose Your Size</h3>
                <p>* Required</p>
            </div>
            <div className='input size'>
                <select id="size-dropdown" value={values.size} name="size" onChange={onChange}>
                    <option value=""> - Select Size - </option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="extra-large">Extra Large</option>
                </select>
            </div>
            <div className='choice-title sauce'>
                <h3>Choose Your Sauce</h3>
                <p>* Required</p>
            </div>
            <div className='input sauce'>
                <select id="size-dropdown" value={values.sauce} name="sauce" onChange={onChange}>
                    <option value=""> - Select Sauce - </option>
                    <option value="tomato">Robust Tomato</option>
                    <option value="marinara">Marinara</option>
                    <option value="smoky bbq">Smoky BBQ</option>
                    <option value="alfredo">Alfredo</option>
                </select>
            </div>
            <div className='choice-title toppings'>
                <h3>Select Toppings</h3>
            </div>
            <div className='input input-toppings'>
                <label>Pepperoni
                    <input type="checkbox" name="pepperoni" checked={values.pepperoni} onChange={onChange} />
                </label>
                <label>Mushrooms
                    <input type="checkbox" name="mushrooms" checked={values.mushrooms} onChange={onChange} />
                </label>
                <label>Olives
                    <input type="checkbox" name="olives" checked={values.olives} onChange={onChange} />
                </label>
                <label>Pineapple
                    <input type="checkbox" name="pineapple" checked={values.pineapple} onChange={onChange} />
                </label>
            </div>
            <div className='choice-title special'>
                <h3>Special Instructions</h3>
            </div>
            <div className='input special'>
                <input id="special-text" type="text" name="special" value={values.special} onChange={onChange} />
            </div>
            <div className='choice-title name'>
                <h3>Please Enter Your Name</h3>
            </div>
            <div className='input name'>
                <div className='errors'>
                    <div>{errors.name}</div>
                </div>
                <input id="name-input" name="name" type="text" placeholder='Please provide your name' value={values.name} onChange={onChange} />
            </div>
            <div className='submit'>
                <button id="order-button" disabled={disabled}>Add to Order</button>
                <button id="cancel" onClick={clickHome}>Cancel Order</button>
            </div>

        </form>
    )
}