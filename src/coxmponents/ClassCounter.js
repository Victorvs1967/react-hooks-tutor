import React, { Component } from 'react';

class ClassCounter extends Component {

    state = { count: 0 };

    render() {

        return (
            <>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    Count - <strong>{this.state.count}</strong>
                </button>
            </>
        )
    }
}

export default ClassCounter;
