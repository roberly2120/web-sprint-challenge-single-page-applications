import React, { useState } from "react";
import { Routes, Route, Link, useNavigate} from 'react-router-dom'
import Form from './Form'
import Homepage from "./Homepage";
import style from './App.css'
import axios from 'axios'
import Confirmation from "./Confirmation";
import schema from './validation/formSchema'
import * as yup from 'yup'

const initialFormValues = {
  name: "",
  size: "",
  sauce: "",
  pepperoni: false,
  mushrooms: false,
  olives: false,
  pineapple: false,
  special: ""
}
const initialFormErrors = {
  name: ""
}

const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [orderValues, setOrderValues] = useState(initialFormValues);
  const [submit, setSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const inputChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
    validate(name, value)
  }

  const navigate = useNavigate();
  const clickHome = () => {
    setOrderValues(initialFormValues)
    setFormValues(initialFormValues);
    setSubmit(false)
    navigate('/')
  }
  
  const clickPizza = () => {
      navigate('/pizza');
  
  }

  const editOrder = () => {
    setFormValues(orderValues)
    setSubmit(false);
  }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      console.log(res);
      setOrderValues(newOrder);
      console.log(orderValues);
    })
    .catch(err => console.error(err))
  }

  const submitForm = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      pepperoni: formValues.pepperoni === true ? "yes" : "no",
      mushrooms: formValues.mushrooms === true ? "yes" : "no",
      olives: formValues.olives === true ? "yes" : "no",
      pineapple: formValues.pineapple === true ? "yes" : "no",
      special: formValues.special
    }
    postNewOrder(newOrder);
    setFormValues(initialFormValues);
    setSubmit(!submit);
  }
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ""}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  return (
    <div>
      <header>
      <h1 onClick={clickHome}>Pizza For Nerds</h1>
      <nav>
        <Link className="nav" to="/">Home</Link>&nbsp;
        <Link className="nav" id="order-pizza" to="pizza">Order Now</Link>
      </nav>
      </header>

      <Routes>
      <Route path="/" element={<Homepage clickPizza={clickPizza}/>}/>
      <Route path="/pizza" element={!submit ? 
        <Form 
          values={formValues}
          change={inputChange}
          submit={submitForm}
          clickHome={clickHome}
          errors={formErrors}     
        /> 
        : <Confirmation values={orderValues} done={clickHome} edit={editOrder} />} 
      />

      </Routes>
    </div>
  );
};
export default App;
