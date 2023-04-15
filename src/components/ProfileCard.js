import React from 'react'

export default function ProfileCard() {
  return (
    <div className='profile-card'>
        <div className='profile-upper-container'>
            <div className='profile-img-container'>
                <img src={require('../static/profile-pics/trixie-mattel.jpg').default } alt="profile-pic" height="100px" width="100px"/>
            </div>url
        </div>
        <div className='profile-lower-container'>
            <h3>Name</h3>
            <h4>Title</h4>
            <p>Description</p>
        </div>
    </div>
  )
}
