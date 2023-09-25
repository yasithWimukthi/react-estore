import React from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "./Cart";
import PaymentResponse from "./Cart/paymentResponse";
import Header from "./Header";
import MainContainer from "./MainContainer";
import ProductDetails from "./Product/productDetails";

const LandingPage = () => {
    console.log("landing page")
    return (
        <>
            <Header />
            <section className="main-container">
                <Switch>
                    <Route exact path="/estore" component={MainContainer} />
                    <Route exact path="/estore/productdetails" component={ProductDetails} />
                    <Route exact path="/estore/viewcart" component={Cart} />
                    <Route exact path="/estore/paymentresponse" component={PaymentResponse} />
                </Switch>
            </section>
        </>
    )
}

export default LandingPage;