import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            deadline: 'December 25, 2017',
            newDeadline: ''
        }
    }
    
    changeDeadline(){
        this.setState({
            deadline: this.state.newDeadline
        });
//        console.log('state', this.state);
    }
    
    render(){
        return (
            <div className="app">
                <h2>Countdown to {this.state.deadline}</h2>
                <Clock clockfor = {this.state.deadline}/>
                <input type="text" onChange={event => this.setState({ newDeadline: event.target.value })} placeholder="New Deadline" />
                <button onClick={() => this.changeDeadline()}>Submit</button>
            </div>
        )
    }
}

export default App;
