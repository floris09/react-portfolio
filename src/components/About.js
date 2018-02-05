import React, { PureComponent } from 'react';
import './About.css'

class About extends PureComponent {
  render() {
    return (
      <div>
        <div className='float-left profile-img' />
        <h1 className='name float-left clear-right'>Floris Meininger</h1>
        <h3 className='title float-left'>Junior Full-Stack Developer</h3>
            <p className='text float-left'>I&#39;m a young and ambitious full-stack developer, located in Amsterdam, Netherlands. Always eager to learn and take on challenging projects. Recently graduated from the Codaisseur Academy in Amsterdam, where amongst other things I learned to use Ruby on Rails, React and React Native. For more info please check my Linkedin and Github accounts and feel free to contact me for further questions!</p>
      </div>
    );
  }
}

export default About;
