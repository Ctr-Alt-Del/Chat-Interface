import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
import Messages from './components/messages'

class App extends Component {
  render() {
    return (
      <div class="app">
        <Header />
        <Messages />
      </div>
    );
  }
}

export default App