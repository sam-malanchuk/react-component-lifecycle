import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }
    render () {
        console.log('Render');

        return <div>
            <div className="counter">
                Counter: {this.state.counter}
            </div>
        </div>
    }
}