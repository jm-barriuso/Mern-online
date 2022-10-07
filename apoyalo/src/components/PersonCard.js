import React, { Component } from 'react';

class PersonCard extends Component {
    
    constructor(props){
        super(props);
        this.state={
            age:this.props.age
        };
    }

    addAge = () => {
        let agemasuno =this.state.age+1;
        console.log("state",this.state);
        this.setState({age:agemasuno})
        
    }
    
    render() {
        const { firstName, lastName, age, hairColor } = this.props
        return (
            <div>
                <h1>{ lastName }, { firstName }</h1>
                <p>Age: { this.state.age }</p>
                <p>Hair Color: { hairColor }</p>
                <button onClick={ this.addAge }>Birthday Button for { firstName } { lastName }</button>
            </div>
        );
    }
}

export default PersonCard;
