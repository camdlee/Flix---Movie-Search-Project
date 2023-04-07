import React, { Component } from 'react'


export default class Home extends Component {

  componentDidMount = () => {
    //console.log('Component did mount')
  }

  render() {
    //console.log('I am being rendered')
    return (
      <div>
        <div className="welcome-card">
          <h1>Welcome</h1>
          <ul>
            <li>You can search any movie or show by genre, rating, etc and add them to your watch list</li>
            <li>Customize your profile with your favorite characters</li>
            <li>Keep track of your progress as you finish movies and shows</li>
            <li>See what's trending in a carousel</li>
          </ul>
        </div>
      </div>
    )
  }
}