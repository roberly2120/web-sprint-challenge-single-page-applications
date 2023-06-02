import React from 'react';

export default function Homepage (props) {
    const { clickPizza } = props;
    return (
        <div className='homepage'>
            <h2>Are you a nerd? Do you like pizza?</h2>
            <h2>We're about to be best friends.</h2>
            
            <button onClick={clickPizza}>Build your pie</button>
        </div>
    )
}