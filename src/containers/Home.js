import React, { PureComponent } from 'react';
import { About, Portfolio, Contact } from '../components'
import './Home.css'

class Home extends PureComponent {
  render() {
    return (
      <div>
        <div className='background1'><i class="fas fa-angle-double-down"></i></div>

        <div className='black-bar'></div>

        <div className='background2'>
          <div className='whitebox'>
            <About />
          </div>
        </div>

        <div className='black-bar'></div>

        <div className='background3'></div>

        <div className='black-bar'></div>

        <div className='background4'>
          <div className='whitebox'>
            <Portfolio />
          </div>
        </div>

        <div className='black-bar'></div>

        <div className='background5'></div>

        <div className='black-bar'></div>

        <div className='background6'>
          <div className='whitebox'>
            <Contact />
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
