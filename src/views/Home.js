import React, { Component } from 'react'
import Trending from '../components/Trending'
import Classics from '../components/Classics'
import SciFi from '../components/SciFi'
// import './Home.css';

export default class Home extends Component {

  componentDidMount = () => {
    //console.log('Component did mount')
  }

  render() {
    //console.log('I am being rendered')
    return (
      <div className='home-trending-container'>
        {/* <div className="home-header">
          <h3>Trending</h3>
        </div> */}
        <div className='home-trending-carousel'>
          <Trending/>
        </div>
        <div className='secondary-row'>
          <h4 className="home-secondary-header">
            Classics
          </h4>
          <div>
            <Classics/>
          </div>
          <h4 className="home-secondary-header">
            Science-Fiction
          </h4>
          <div>
            <SciFi/>
          </div>
        </div>
      </div>
    )
  }
}