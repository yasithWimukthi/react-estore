import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import './App.css';
import LandingPage from './components';
import ProductDetails from './components/Product/productDetails';
import Cart from './components/Cart';
import PaymentResponse from "./components/Cart/paymentResponse";
import Login from './components/Login';

function App() {
  return (
    <>


      <Switch>
        <Route path="/estore" component={LandingPage} />
        {/* <Route exact path="/productdetails" component={ProductDetails} />
          <Route exact path="/viewcart" component={Cart}/>
          <Route exact path="/paymentresponse" component={PaymentResponse}/> */}
        <Route exact path="/" component={Login} />
      </Switch>

    </>
  );
}

export default App;
