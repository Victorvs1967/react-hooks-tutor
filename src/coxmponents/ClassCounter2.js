import React, { Component } from 'react';

class ClassCounter2 extends Component {

    state = {count: 0};
    incrementCount = () => this.setState(prevState => ({count: prevState.count + 1}));

    render() {
        return (
            <>
                <button onClick={this.incrementCount}>
                    Count - {this.state.count}
                </button>
            </>
        )
    }
}

export default ClassCounter2;
