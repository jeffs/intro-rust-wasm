import React from 'react';
import logo from './logo.svg';
import './App.css';

const import_wasm_once_then = function() {
  let done = false;
  return function(cb: (a: any) => void) {
    if (!done) {
      import('wasm').then(cb);
      done = true;
    }
  };
}();

function App() {
  console.log('render');
  import_wasm_once_then(wasm => {
    console.log(wasm);
    console.log(wasm.add_two_ints(3, 4));
  });
  return (
    <div className="App">
      <header className="App-header">
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
