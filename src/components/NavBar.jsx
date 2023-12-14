import React from "react";

export default function NavBar(props) {

    return (
        <header className="page-header mt-0">
        <div className="d-flex justify-content-between w-100 align-items-center">
            <div className="d-flex">
            <img
                src="https://sdlms.deepthought.education/assets//uploads/files/images/dt_logo.png"
                className="rounded-circle dt-logo"
                alt="logo"
            />
            <div className="ml-2 my-auto">
                <span className="header-text1 mx-2 text-uppercase">Deshmukhyy</span>
                <span className="header-text2 text-uppercase">Express</span>
            </div>
            </div>
        </div>
        <button className="cursor-pointer btn bg-transparent border-0">
            <i className="fa fa-sign-out logout-icon" aria-hidden="true"></i>
        </button>
        </header>
    );
}
