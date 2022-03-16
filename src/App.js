import React, { Component } from 'react';
import Footer from './Footer';
import List from './List';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Component dari Class App</h1>
        <List />
        <Footer judul="Halaman Footer" nama="Fitri Mutiara Devi" />
      </div>
    )
  }
} 

export default App; 

/*import React from 'react';// Component menggunakan Function
const Footer = (props) => {
 return (
  <div>
   <h3>Halaman Footer</h3>
   <h3>Component ini dibuat menggunakan Function bukan Class</h3>
   <p>Nilai ini ditampilkan dari props: { props.judul } </p>
   <p>Nama Saya: { props.nama } </p>
  </div>
 );
}
export default Footer;*/


/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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

export default App;*/
