import React from 'react';
import logo from './logo.svg';
import './App.css';
import LogicalUi from './components/LogicalUi';
import Events from './components/Events';
import DomOpe from './components/DomOpe';

function showCircle() {
  const colors = ['#393E41', '#E94F37', '#1C89BF', '#A1D363'];
  const ran = Math.floor(Math.random() * colors.length);
  return <LogicalUi bgColor={colors[ran]} />;
}
function showCircle2() {
  const colors = ['#393E41', '#E94F37', '#1C89BF', '#A1D363'];
  let arr = [];
  for (let i = 0; i < colors.length; i++) {
    arr.push(<LogicalUi key={i} bgColor={colors[i]} />);
  }
  return arr;
}
function App() {
  // const circle = <LogicalUi bgColor="#0f0" />;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          test Edit <code>src/App.js</code> and save to reload.
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
      <p>随机根据某一个颜色生成圆：</p>
      {showCircle()}
      <p>所有颜色均生成圆：</p>
      {showCircle2()}
      <Events />
      <DomOpe />
    </div>
  );
}

export default App;
