import React from 'react';
import Counter from './Counter.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 35
    }

    this.mountCounter = () => this.setState({mount: true});
    this.unmountCounter = () => this.setState({mount: false});

    this.ignoreProp = () => this.setState({ignoreProp: Math.random()})
    this.seedGenerator = () => this.setState({seed: Number.parseInt(Math.random() * 100)})
  }
  render() {
    const {mount, ignoreProp, seed} = this.state;
    return <div>
      <button onClick={this.mountCounter} disabled={mount}>Mount</button>
      <button onClick={this.unmountCounter} disabled={!mount}>Unmount</button>
      <button onClick={this.ignoreProp}>Ignore Prop</button>
      <button onClick={this.seedGenerator}>Seed Generator</button>
      {mount ?
        <Counter
          ignoreProp={ignoreProp}
          seed={seed}
        /> :
        null}
    </div>
  }
}

export default App;
