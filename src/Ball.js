import React, { Component } from 'react';
import './Ball.css';

class Ball extends Component {
  static defaultProps = {
    colorBalls:'red',
    colorText:'white',
    number: '?'
  }

  render(){
    return(
      <div className='Ball' style={{backgroundColor:this.props.colorBalls}}>
        <p
          className='Ball-text' style={{color:this.props.colorText}}>{this.props.number}</p>
      </div>
    );
  }
}

export default Ball
