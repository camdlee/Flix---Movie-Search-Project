import React from 'react'

export default function Footer() {
  return (
    <div>
    {/* Footer */}
    <footer className="bg-dark text-center text-white">
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
                    <a href="#!" className="text-white">FAQ</a>
                </li>
                <li>
                    <a href="#!" className="text-white">Contact Us</a>
                </li>
                <li>
                    <a href="#!" className="text-white">Media Center</a>
                </li>
                <li>
                    <a href="#!" className="text-white">Ways to Watch</a>
                </li>
                </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <ul className="list-unstyled mb-0">
                <li>
                    <a href="#!" className="text-white">Help Center</a>
                </li>
                <li>
                    <a href="#!" className="text-white">Legal Notices</a>
                </li>
                <li>
                    <a href="#!" className="text-white">Terms of Use</a>
                </li>
                <li>
                    <a href="#!" className="text-white">Corporate Information</a>
                </li>
                </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <ul className="list-unstyled mb-0">
                <li>
                    <a href="#!" className="text-white">Redeem Gift Cards</a>
                </li>
                <li>
                    <a href="#!" className="text-white">Buy Gift Cards</a>
                </li>
                <li>
                    <a href="#!" className="text-white">Shop</a>
                </li>
                <li>
                    <a href="#!" className="text-white">Jobs</a>
                </li>
                </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <ul className="list-unstyled mb-0">
                <li>
                    <a href="#!" className="text-white">Account</a>
                </li>
                <li>
                    <a href="#!" className="text-white">Privacy</a>
                </li>
                <li>
                    <a href="#!" className="text-white">Questions?</a>
                </li>
                <li>
                    <a href="#!" className="text-white">More</a>
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
        <a className="text-white" href="https://github.com/camdlee"> Cameron Lee</a>
        </div>
        {/* Copyright */}
    </footer>
    {/* Footer */}
    </div>

  )
}
