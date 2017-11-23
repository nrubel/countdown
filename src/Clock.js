import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props){
        super(props);
        
        this.state ={
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
        
        console.log('Props', this.props);
    }
    
    componentWillMount(){
        this.getTimeUntil(this.props.clockfor);
    }
    
    componentDidMount(){
        setInterval( () => this.getTimeUntil(this.props.clockfor), 1000 )
    }
    
    leadingZero(num){        
        return num < 10 ? '0' + num : num;
    }
    
    getTimeUntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        
        console.log('time', time);
        
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/(1000*60)) % 60);
        const hours = Math.floor((time/(1000*60*60)) % 24);
        const days = Math.floor(time/(1000*60*60*24));
        
        console.log('days', days, 'hours', hours, 'minutes', minutes, 'seconds', seconds);
        
        this.setState({ days, hours, minutes, seconds });
    }
    
    
    render() {
        
        return (
            <ul>
                <li>{this.leadingZero(this.state.days)} days</li>
                <li>{this.leadingZero(this.state.hours)} hours</li>
                <li>{this.leadingZero(this.state.minutes)} minutes</li>
                <li>{this.leadingZero(this.state.seconds)} seconds</li>
            </ul>
        );
    }
}

export default Clock;