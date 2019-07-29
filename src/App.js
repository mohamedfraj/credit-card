import React, { Component } from 'react';
import './App.css';
import Imgcard from "./header-creditcard";
import Main from "./main";
import Input from "./input";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: "",
      date: "",
      name: ""
    }
  }
  render() {
    return (
 
      <div>
        <div className="App">
          <Imgcard />
          <Main number={this.state.number} date={this.state.date} name={this.state.name} />
        </ div>
        <Input
         changeNumber={(newNumber) => this.setState({
          number: newNumber
        })}
          changeDate={(newDate) => this.setState({
            date: newDate
          })}
          changeName={(newName) => this.setState({
            name: newName
          })}
        />
      </div>
    );
  }
}

export default App;
