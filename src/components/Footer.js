import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
    {/* Footer */}
    <footer className="text-center">
        {/* Grid container */}
        <div className="container p-4">
        {/* Section: Form */}
        <section className>
            <form action>
            {/*Grid row*/}
            <div className="row d-flex justify-content-center">
                {/*Grid column*/}
                <div className="col-auto">
                <p className="pt-2">
                    <strong>Sign up for membership</strong>
                </p>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-md-5 col-12">
                {/* Email input */}
                <div className="form-outline form-white mb-4">
                    <input type="email" id="form5Example21" className="form-control" />
                    <label className="form-label" htmlFor="form5Example21">Email address</label>
                </div>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-auto">
                {/* Submit button */}
                <button type="submit" className="btn btn-outline-light mb-4">
                    Submit
                </button>
                </div>
                {/*Grid column*/}
            </div>
            {/*Grid row*/}
            </form>
        </section>
        {/* Section: Form */}
        {/* Section: Text */}
        <section className="mb-4">
            <p>
                This personal project is a multipage web application using React, Javascript, and Firebase. 
            </p>
        </section>
        {/* Section: Text */}
        {/* Section: Links */}
        <section className>
            {/*Grid row*/}
            <div className="row">
            {/*Grid column*/}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <ul className="list-unstyled mb-0">
                <li>
                    <a href="#!" className="text-blue">FAQ</a>
                </li>
                <li>
                    <a href="#!" className="text-blue">Contact Us</a>
                </li>
                <li>
                    <a href="#!" className="text-blue">Media Center</a>
                </li>
                <li>
                    <a href="#!" className="text-blue">Ways to Watch</a>
                </li>
                </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <ul className="list-unstyled mb-0">
                <li>
                    <a href="#!" className="text-blue">Help Center</a>
                </li>
                <li>
                    <a href="#!" className="text-blue">Legal Notices</a>
                </li>
                <li>
                    <a href="#!" className="text-blue">Terms of Use</a>
                </li>
                <li>
                    <a href="#!" className="text-blue">Corporate Information</a>
                </li>
                </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <ul className="list-unstyled mb-0">
                <li>
                    <a href="#!" className="text-blue">Redeem Gift Cards</a>
                </li>
                <li>
                    <a href="#!" className="text-blue">Buy Gift Cards</a>
                </li>
                <li>
                    <a href="#!" className="text-blue">Shop</a>
                </li>
                <li>
                    <a href="#!" className="text-blue">Jobs</a>
                </li>
                </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <ul className="list-unstyled mb-0">
                <li>
                    <a href="#!" className="text-blue">Account</a>
                </li>
                <li>
                    <a href="#!" className="text-blue">Privacy</a>
                </li>
                <li>
                    <a href="#!" className="text-blue">Questions?</a>
                </li>
                <li>
                    <a href="#!" className="text-blue">More</a>
                </li>
                </ul>
            </div>
            {/*Grid column*/}
            </div>
            {/*Grid row*/}
        </section>
        {/* Section: Links */}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        © 2023 Copyright:
        <a className="text-blue" href="https://github.com/camdlee"> Cameron Lee</a>
        </div>
        {/* Copyright */}
    </footer>
    {/* Footer */}
    </div>

  )
}
