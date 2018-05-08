import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneForm from './components/PhoneForm';

class App extends Component {

  // constructor = () => {
  //   super();
  //   this.state.data = [];
  // }

  constructor () {
    super();
    this.state = {
      data : []  
    }
  }

  handleCreate = (data) => {
    console.log('New Member :: ', data);
    this.setState({ data : this.state.data.concat(data) });
  }


  render() {
    console.log('On Render :: ', this.state.data);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PhoneForm onCreate={this.handleCreate}/>
        <ul>
          {
            this.state.data.map((mem, i) => {
              console.log(arguments)
              return <li key={i}>{mem.name} {mem.phone}</li>
            })
          }
          </ul>
      </div>
    );
  }
}

export default App;
