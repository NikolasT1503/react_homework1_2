import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Первое занятие понравилось всем, но пришлось отпроситься. Хотелось бы чтобы занятие записывалось на видео полностью, чтобы можно было потом восстановить контекст, если пришлось отпрашиваться с занятия.
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
