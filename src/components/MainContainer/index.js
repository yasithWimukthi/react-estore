import React from "react";
import Sidebar from "../Sidebar";
import Product from "../Product";
import "../MainContainer/_maincontainer.scss";

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("MAIN CONTAINER",this.props);
        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4">
                        <Sidebar />
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8">
                        <Product />
                    </div>
                </div>
            </div>

        )
    }
}

export default MainContainer;