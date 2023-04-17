import React, { Component } from 'react'
import Trending from './Trending'
// import './Home.css';

export default class Home extends Component {

  componentDidMount = () => {
    //console.log('Component did mount')
  }

  render() {
    //console.log('I am being rendered')
    return (
      <div>
        <div>
          <Trending/>
        </div>
      </div>
    )
  }
}