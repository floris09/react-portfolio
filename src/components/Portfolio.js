import React, { PureComponent } from 'react';
import Slider from 'react-slick'
import './Portfolio.css'

class Portfolio extends PureComponent {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000
    }

    return (
      <div className='center-content'>
        <h3 className='title'>Portfolio</h3>

        <Slider {...settings}>
          <div> <div className='portfolio blv1'></div> </div>
          <div> <div className='portfolio blv2'></div> </div>
          <div> <div className='portfolio blv3'></div> </div>
          <div> <div className='portfolio tam1'></div> </div>
          <div> <div className='portfolio tam2'></div> </div>
          <div> <div className='portfolio tam3'></div> </div>
          <div> <div className='portfolio matcher1'></div> </div>
          <div> <div className='portfolio matcher2'></div> </div>
          <div> <div className='portfolio matcher3'></div> </div>
          <div> <div className='portfolio evaluation1'></div> </div>
          <div> <div className='portfolio evaluation2'></div> </div>
          <div> <div className='portfolio evaluation3'></div> </div>
        </Slider>

      </div>
    );
  }
}

export default Portfolio;
