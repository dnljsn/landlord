import React, { Component } from 'react';
import logo from './img/landlord-logo.png';
import './App.css';
import axios from 'axios';
import InputBox from './components/InputBox'
import Tiles from './components/Tiles'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      properties: []
    };
    this.buttonClick = this.buttonClick.bind(this);
    this.filterChangeClick = this.filterChangeClick.bind(this)
    this.deleteClick = this.deleteClick.bind(this)
  }

  componentDidMount() {
    axios.get('/api/properties').then(response => {
      this.setState({ properties: response.data })
    })
  }

  getProperties() {
    axios.get('/api/properties').then(response => {
      this.setState({ properties: response.data })
    })
  }

  buttonClick(userInput) {
    let promise = axios.post(`/api/property`, {
      address: userInput
    })
    promise.then(response => {
      this.setState({
        properties: response.data

      })

    })
    console.log("end of button click parent")
  }

  filterChangeClick(id) {
    let promise = axios.put(`/api/property/${id}`)
    promise.then(response => {
      this.getProperties()
    })
  }

  deleteClick(id) {
    let promise = axios.delete(`/api/property/${id}`)
    promise.then(response => {
      this.getProperties()
    })
  }

  render() {
    const tiles = this.state.properties.map(element => {
      return (
        <Tiles
          property={element}
          filterChangeClick={this.filterChangeClick}
          deleteClick={this.deleteClick}
        />
      )
    })
    return (
      <div className="App">
        <div className="logo">
          <img src={logo} alt='logo' width="200" />
        </div>
        <h1 className="title"
        >Keep track of maintenance <br>
          </br>across all your properties!</h1>
        <section>
          <InputBox
            buttonClick={this.buttonClick} />
        </section>
        <main>
          {tiles}
        </main>
      </div>
    );
  }
}

export default App;
