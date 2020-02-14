import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component {
  static defaultProps = {
    name: 'Lottery',
    balls: 6
  }

  constructor(props){
    super(props);
    this.state={
      balls: Array.from({length: this.props.balls})
    };
    this.generateBalls = this.generateBalls.bind(this);
  }


  generateBalls(){
    let freshBalls = [];
    for (let i=0;i< this.props.balls; i++) {
      freshBalls = [...freshBalls, (Math.floor(Math.random()*this.props.maxNum)+1)]
    }
    this.setState({balls: [...freshBalls]})
  }



  render(){
    console.log(this.state.balls);
    return(
      <div className='Lottery'>
        <h1>{this.props.name}</h1>
        <div className='Lottery-balls'>
          {this.state.balls.map(ball => 
            <Ball number={ball} />
          )}
        </div>
        <button onClick={this.generateBalls}>Generate!</button>
      </div>
    );
  }
}

export default Lottery