import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component {

  render(){
    return(
      <div className='Lottery'>
        <h1>{this.props.name}</h1>
        <Ball number={55} colorBalls='red' colorText='white'/>
        <button>Generate!</button>
      </div>
    );
  }
}

export default Lottery