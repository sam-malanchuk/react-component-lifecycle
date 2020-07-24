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

    // allows you to transfer props to state
    static getDerivedStateFromProps(props, state) {
        if(props.seed && state.seed !== props.seed) {
            return {
                seed: props.seed,
                counter: props.seed
            }
        }
        return null;
    }

    // called right after render
    componentDidMount() {
        console.log('componentDidMount()');
        console.log('--');
    }

    // let's react know if renders should be triggered or not
    shouldComponentUpdate(nextProps, nextState) {
        // if the ignoreProp changes then don't update the component
        if(nextProps.ignoreProp &&
            this.props.ignoreProp !== nextProps.ignoreProp) {
            console.log("shouldComponentUpdate() - Render ignored")
            console.log('--');
            return false;
        }
        console.log("shouldComponentUpdate() - Render NOT ignored")
        return true;
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

    // called each time the component unmounts
    componentWillUnmount() {
        console.log('componentWillUnmount()');
        console.log('--');
    }
}