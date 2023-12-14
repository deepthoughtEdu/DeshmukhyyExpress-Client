import React from "react";
import Card from 'react-bootstrap/Card';

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home(props) {
    return (
        <>
            <NavBar />
            <div className="container mt-5 background">
                <div className="row justify-content-center pt-5">

                  <div className="col-12 col-md-4 col-lg-3 mt-5">
                    <Link to={'/user'} className="justify-content-center d-flex">
                      <Card className="text-center bg-light border shadow" style={{borderRadius: '12px'}}>
                        <h1 className="pt-4">
                          User
                        </h1>
                        <Card.Body className="pb-4">
                        <img src={"https://clipart-library.com/images/pi7rn845T.png"} style={{width: '250px', height: '220px'}} />
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3 mt-5">
                    <Link to={'/delivery-partner'} className="justify-content-center d-flex">
                      <Card className="text-center bg-light border shadow" style={{borderRadius: '12px'}}>
                        <h1 className="pt-4">
                          Delivery Partner
                        </h1>
                        <Card.Body className="pb-4">
                          <img alt="" src={"https://cdni.iconscout.com/illustration/premium/thumb/food-parcel-delivery-4650524-3856179.png"} style={{width: '250px', height: '220px'}} />
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>

                </div>
            </div>
            <Footer />
        </>
    )
}