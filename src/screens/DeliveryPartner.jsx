// Step 1: Import necessary React and external libraries/modules
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RequestCard from "../components/RequestCard";

// Step 2: Import data from external sources
import data from '../data/requests.json';
import requirements from '../data/requirements.json';

// Step 3: Define a functional component named 'DeliveryPartner'
export default function DeliveryPartner(props) {
    // Step 4: Declare state variable and its setter method
    const [requests, setRequests] = useState(data);

    // Step 5: Define function to handle order acceptance
    const onOrderAccept = async (event) => {
        // Extract the id from the clicked element
        const id = event.target.id;

        // Remove the card associated with the accepted order
        setRequests(current => current.filter(item => item._id !== id));

        // Show success message
        swal('Success!', 'Accepted successfully!', 'success');
    }

    // Step 6: Function to get image URL based on the requirement
    const getImageUrlFromRequirement = (requirement) => {
        // Find the matching requirement in the data and retrieve the image URL
        let item = requirements.find(e => e.value == String(requirement).toLowerCase().split(' ').join(''));
        return item && item.image;
    }

    // Step 7: Render the component
    return (
        <>
            {/* Step 7.1: Include the 'NavBar' component */}
            <NavBar />

            {/* Step 7.2: Main content container */}
            <div className="container mt-5 pt-4 background">
                {/* Step 7.3: Heading for the component */}
                <h1 className="mb-4 text-center pt-5">Pending requests</h1>

                {/* Step 7.4: Display pending requests using cards */}
                <div className="row justify-content-center">
                    {requests.map((item, index) => {
                        return (
                            <RequestCard
                                // Step 7.4.1: Include an action button on the card
                                actionButton={true}
                                // Step 7.4.2: Customize styles for the card
                                styles={{ width: "25rem" }}
                                // Step 7.4.3: Pass the order acceptance function to the card
                                onOrderAccept={onOrderAccept}
                                // Step 7.4.4: Pass data and image URL to the card
                                data={item} key={index}
                                image={getImageUrlFromRequirement(item.requirement)}
                            />
                        )
                    })}
                </div>

            </div>

            {/* Step 7.5: Include the 'Footer' component */}
            <Footer />
        </>
    );
}