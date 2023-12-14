import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import swal from "sweetalert";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RequestStepper from "../components/RequestStepper";
import {generateUUID} from '../utilities';

import requirements from '../data/requirements.json';
import data from '../data/requests.json';
import RequestCard from "../components/RequestCard";

export default function User (props) {
    /** State variables and their setter methods */
    const [requests, setRequests] = useState(data);
    const [open, setOpen] = useState(false);

    /** Handles the modal show/hide state variables */
    const handleClose = () => setOpen(false);
    const handleShow = () => setOpen(true);

    /** Function to handle the submit event */
    const dataOnSubmit = async (data) => {

        data._id = generateUUID();
        
        setRequests((previousData) => ([data, ...previousData]));
        setOpen(false);

        swal('Success!',
        'Created successfully!',
        'success');
    }

    const getImageBasedOnRequirement = (requirement) => {
        let item = requirements.find(e => e.value === String(requirement).toLowerCase().split(' ').join(''));
        return item && item.image;
    }

    const settings = {
        className:"center-slider",
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        arrows: true,
        dots: true,
        speed: 300,
        infinite: true,
        autoplaySpeed: 2500,
        autoplay: true
      };
    
    return (
      <>
        <NavBar />

        <div className="px-4 mt-5">
          <div className="row mt-5 justify-content-center">
              <h3 className="">Orders and deliveries</h3>
          </div>
          
          <Slider {...settings}>
              {requests.map((item, index) => <RequestCard data={item} image={getImageBasedOnRequirement(item.requirement)} key={index} />)}
          </Slider>

        </div>

        <SpeedDial
              ariaLabel="SpeedDial basic example"
              sx={{ position: 'absolute', bottom: 60, right: 60 }}
              icon={<SpeedDialIcon className="mt-3" />}
              onClick={handleShow}
            />

        <Dialog maxWidth="sm" fullWidth open={open} onClose={handleClose}>
                <DialogTitle>Add new request</DialogTitle>

                <IconButton onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                }}>
                        <FontAwesomeIcon icon={faClose} />
                </IconButton>

                <DialogContent>
                    <RequestStepper onSubmit={dataOnSubmit} />
                </DialogContent>

            </Dialog>

        <Footer />
      </>
    );
}