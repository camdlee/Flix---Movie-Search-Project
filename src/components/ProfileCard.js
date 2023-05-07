import React from 'react';
import { auth } from '../firebase';
import { useState, useEffect } from 'react';
import { onAuthStateChanged, updateProfile, signOut } from "firebase/auth";

export default function ProfileCard() {

  const [authUser, setAuthUser] = useState('')
  const [photoURL, setPhotoURL] = useState('')

  // ---------------------------------useEffect hook to authenticate users-----------------------------------
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setAuthUser(user)
            console.log(user)
            const uid = user.uid;
            // ...
        } else {
          setAuthUser('')
        }  
      }, [authUser])
      })

  // ---------------------------------function to update profile-----------------------------------  
  const handleChange = (event) => {
  }
  const handleClick = (event) => {
  }



  return (
    <div>
      <section>
        <div className="container py-5">
          {/* <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">User</a></li>
                  <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                </ol>
              </nav>
            </div>
          </div> */}
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img src="https://pbs.twimg.com/media/EwnMiM2WgAQAH6y.jpg" alt="avatar" className="rounded-circle img-fluid" style={{width: 150}} />
                  <h5 className="my-3">{authUser.displayName}</h5>
                  <p className="text-muted mb-1">All Stars 3 Winner</p>
                  <p className="text-muted mb-4">Los Angeles, CA</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-outline-primary">Edit</button>
                    {/* <button type="button" className="btn btn-outline-primary ms-1">Message</button> */}
                  </div>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fas fa-globe fa-lg text-warning" />
                      <p className="mb-0">Github</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-github fa-lg" style={{color: '#333333'}} />
                      <p className="mb-0">LinkedIn</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-twitter fa-lg" style={{color: '#55acee'}} />
                      <p className="mb-0">Instagram</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-instagram fa-lg" style={{color: '#ac2bac'}} />
                      <p className="mb-0">Twitter</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-facebook-f fa-lg" style={{color: '#3b5998'}} />
                      <p className="mb-0">Facebook</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{authUser.displayName}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{authUser.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(097) 234-5678</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(098) 765-4321</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Los Angeles, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4"><h5>Most Watched</h5>
                      </p>
                      <p className="mb-1" style={{fontSize: '.77rem'}}>Too Hot to Handle</p>
                      <div className="progress rounded" style={{height: 5}}>
                        <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Real Housewives of New York City</p>
                      <div className="progress rounded" style={{height: 5}}>
                        <div className="progress-bar" role="progressbar" style={{width: '72%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>The Kardashians</p>
                      <div className="progress rounded" style={{height: 5}}>
                        <div className="progress-bar" role="progressbar" style={{width: '89%'}} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Love is Blind</p>
                      <div className="progress rounded" style={{height: 5}}>
                        <div className="progress-bar" role="progressbar" style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>90 Day Fiance</p>
                      <div className="progress rounded mb-2" style={{height: 5}}>
                        <div className="progress-bar" role="progressbar" style={{width: '66%'}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4"><h5>Favorite Genres</h5>
                      </p>
                      <p className="mb-1" style={{fontSize: '.77rem'}}>Reality</p>
                      <div className="progress rounded" style={{height: 5}}>
                        <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Drama</p>
                      <div className="progress rounded" style={{height: 5}}>
                        <div className="progress-bar" role="progressbar" style={{width: '72%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Romance</p>
                      <div className="progress rounded" style={{height: 5}}>
                        <div className="progress-bar" role="progressbar" style={{width: '89%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Documentary</p>
                      <div className="progress rounded" style={{height: 5}}>
                        <div className="progress-bar" role="progressbar" style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Science Fiction</p>
                      <div className="progress rounded mb-2" style={{height: 5}}>
                        <div className="progress-bar" role="progressbar" style={{width: '66%'}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
