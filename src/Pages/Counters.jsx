import React, { Component } from 'react'
import Counter from '../Components/counter'


const counters =[
    {id:1 , count:0 ,steps:1},
    {id:2, count:0 ,steps:10},
    {id:3 , count:0 ,steps:1},
    {id:4 , count:0 ,steps:100}
];

export default class Counters extends Component {
    state={
        counters,
    };

    onIncrement =(id,steps)=>{
        this.setState(prevState =>{
         return { counters: prevState.counters.map(item =>{
                if(item.id === id){
                    return {...item ,  count: item.count + steps};
                }
                return item;
            })}
        });
    }

    onDecrement =(id,steps)=>{
        this.setState(prevState =>{
         return { counters: prevState.counters.map(item =>{
                if(item.id === id){
                    if(item.count > 0)
                    return {...item ,  count: item.count - steps};
                }
                return item;
            })}
        });
    }

  render() {
    return (
      <div>
        {this.state.counters.map(item => <Counter key={item.id}  {...item} onIncrement={this.onIncrement}  onDecrement={this.onDecrement}/>)}
      </div>
    )
  }
}
