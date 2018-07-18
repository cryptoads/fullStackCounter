import React, { Component } from 'react';
import axios from 'axios';

class Counter extends Component {
    constructor(){
        super()
        this.state ={}
    }

    componentWillMount(){
        axios.get('/counter')
        .then(({ data }) =>{this.setState(data)})
    }

    addOne(){
        console.log('this')
        axios.post('/counter/add', {})
        .then(({ data }) => {this.setState(data)})
    }

    subOne(){
        axios.get('/counter/subtract')
        .then(({ data }) => {this.setState(data)})
    }

    render(){
        return(
            <div>
            <h1>{this.state.counter}</h1>
            <button onClick={this.addOne.bind(this)}> + </button>
            <button onClick={this.subOne.bind(this)}> - </button>
            </div>
            )
    }
}

export default Counter; 