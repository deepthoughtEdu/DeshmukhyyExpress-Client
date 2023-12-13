import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

import swal from "sweetalert";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Movie from "../components/Movie";
import movies from '../data/movies.json';

export default function Home() {
    const [items, setItems] = useState(movies);
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState({
      title: '',
      releaseYear: '',
      time: '',
      rating: 4,
      fare: '',
      showTime: ''
    });

    /** Handles the modal show/hide state variables */
    const handleClose = () => setOpen(false);
    const handleShow = () => setOpen(true);

    const valueOnChange = (event) => {
        setValues((previousValue) => ({...previousValue, [event.target.name]: event.target.value}));
    }

    /** Function to handle the submit event */
    const dataOnSubmit = async () => {
      console.log(values)
      setItems((previousData) => ([values, ...previousData]));
      setOpen(false);

      swal('Success!',
      'Created successfully!',
      'success');
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
            <NavBar  />
            
            <div className="px-4 mt-5 background">
                <div className="row mt-5 justify-content-center">
                    <h1 className="mt-5">All movies</h1>
                </div>
                
                <Slider {...settings}>
                    {items.map((item, index) => <Movie data={item} key={index} />)}
                </Slider>


            </div>
            
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              sx={{ position: 'absolute', bottom: 60, right: 60 }}
              icon={<SpeedDialIcon className="mt-3" />}
              onClick={handleShow}
            />

            <Dialog maxWidth="sm" fullWidth open={open} onClose={handleClose}>
                <DialogTitle>Add new movie</DialogTitle>
                    <DialogContent>
                        <form className="col-12 form-container" id="request-form">
                        <div className="mb-3">
                              <label htmlFor="title" className="form-label">Title for the movie</label>
                              <input onChange={valueOnChange} defaultValue={values.title} required type="text" className="form-control" placeholder="Enter title" name="title" id="title"/>
                          </div>

                          <div className="mb-3">
                              <label htmlFor="rating-selector" className="form-label">
                                  Rate out of 5
                              </label>
                              <input onChange={valueOnChange} defaultValue={values.rating} required type="range" className="form-range w-100" min="0" max="5" step="1" name="rating" id="rating-selector"/>
                              <div id="range-value" className="text-sm-right text-muted">4</div>
                          </div>

                          <div className="mb-3">
                              <label htmlFor="showTime" className="form-label">Show time (when the movie starts)</label>
                              <input onChange={valueOnChange} defaultValue={values.showTime} required type="time" className="form-control" name="showTime" id="showTime"/>
                          </div>

                          <div className="mb-3">
                              <label htmlFor="fare" className="form-label">Ticket price</label>
                              <input onChange={valueOnChange} defaultValue={values.fare} required type="number" min="1" step="1" className="form-control" placeholder="Enter price for tickets" name="fare" id="fare"/>
                          </div>

                          <div className="mb-3">
                              <label htmlFor="year" className="form-label">Year of the movie</label>
                              <input onChange={valueOnChange} defaultValue={values.releaseYear} required type="number" min="1800" max="2030" step="1" className="form-control" placeholder="Enter year of release" name="releaseYear" id="year"/>
                          </div>
                            
                        </form>
                    </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={dataOnSubmit}>Create</Button>
                  </DialogActions>
            </Dialog>

            <Footer />
        </>
    );
}