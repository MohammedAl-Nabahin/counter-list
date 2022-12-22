import React, { Component } from 'react'
import './style.css';

export default class counter extends Component {
  render() {
    return (
      <div className='Counter'>
        <p>{this.props.count}</p>
        <div className='buttons'>
        <button className='decrement' onClick={()=>this.props.onDecrement(this.props.id,this.props.steps)}>-</button>
        <button className='increment' onClick={()=>this.props.onIncrement(this.props.id,this.props.steps)}>+</button>
        </div>
      </div>
    )
  }
}
