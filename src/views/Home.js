import React, { Component } from 'react'

export default class Home extends Component {

  componentDidMount = () => {
    console.log('Component did mount')
  }

  render() {
    console.log('I am being rendered')
    return (
      <div>
        <div>
          <h1>This is my Capstone Project Homepage</h1>
        </div>
      </div>
    )
  }
}