import React, { Component } from 'react';

class ClassCounter extends Component {

    state = { count: 0 };
    incrementCount = () => this.setState({count: this.state.count + 1});

    render() {
        
        return (
            <>
            <button onClick={this.incrementCount}>Count - <strong>{this.state.count}</strong></button>
            </>
        )
    }
}

export default ClassCounter;
