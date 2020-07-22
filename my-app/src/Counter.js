import React from 'react';

export default class Counter extends React.Component {
    // get the props into the component
    constructor(props) {
        // pass in the props
        super(props);

        // create a state for this component
        this.state = {
            // keep a numeric value called counter
            counter: 0
        };

        // update the state counter by adding one
        this.increment = () => this.setState({counter: this.state.counter + 1});
        // update the state counter by removing one
        this.decrement = () => this.setState({counter: this.state.counter - 1});
    }

    // called right after render
    componentDidMount() {
        console.log('componentDidMount()');
        console.log('--');
    }

    render () {
        // consoling the fact that we are getting a render
        console.log('Render');

        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <div className="counter">
                    Counter: {this.state.counter}
                </div>
            </div>
        );
    }

    // called each time the component updates
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate()');
        console.log('--');
    }
}