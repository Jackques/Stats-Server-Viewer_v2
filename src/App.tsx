import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from 'react-bootstrap/Button';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './components/topbar/topbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Topbar>test</Topbar>{' '}
        <Button variant="primary">Primary</Button>{' '}
        

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
