import React, { PureComponent } from 'react';
import About from '../components/About'
import './Home.css'

class Home extends PureComponent {
  render() {
    return (
      <div>
        <div className='background background1'><i class="fas fa-angle-double-down"></i></div>

        <div className='black-bar'></div>

        <div className='background background2'>
          <div className='whitebox'>
            <About />
          </div>
        </div>

        <div className='black-bar'></div>

        <div className='background background3'></div>

        <div className='black-bar'></div>

        <div className='background background4'></div>

        <div className='black-bar'></div>

        <div className='background background5'></div>


      </div>
    );
  }
}

export default Home;
