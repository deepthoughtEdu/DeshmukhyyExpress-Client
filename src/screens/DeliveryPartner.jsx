import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RequestCard from "../components/RequestCard";

import data from '../data/requests.json';
import requirements from '../data/requirements.json';

export default function DeliveryPartner(props) {
    const [requests, setRequests] = useState(data);

    const onOrderAccept = async (event) => {
        const id = event.target.id;

        // Removing the card which is accepted by the delivery partner
        setRequests(current => current.filter(item => item._id !== id));

        swal('Success!',
        'Accepted successfully!',
        'success');
    }

    const getImageUrlFromRequirement = (requirement) => {
        let item = requirements.find(e => e.value == String(requirement).toLowerCase().split(' ').join(''));
        return item && item.image;
    }

    return (
      <>
        <NavBar />
        <div className="container mt-5 pt-4 background">
          <h1 className="mb-4 text-center pt-5">Pending requests</h1>
          
          <div className="row justify-content-center">
            {requests.map((item, index) => {
                return (
                  <RequestCard 
                    actionButton={true} 
                    styles={{ width: "25rem" }} 
                    onOrderAccept={onOrderAccept} 
                    data={item} key={index} 
                    image={getImageUrlFromRequirement(item.requirement)}
                  />
                )
            })}
          </div>

        </div>
        <Footer />
      </>
    );
}