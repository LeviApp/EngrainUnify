import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from "axios"
function App() {

useEffect(() => {
  fetch("https://engrain-unify.herokuapp.com", {
    headers: {
      'API-Key': '7d64ca3869544c469c3e7a586921ba37',
    },
  })
    .then((response) => {
    console.log(response, "HELLO!")
    return response.json()
})
    .then((data) => {
      console.log({data})
    });
});


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
