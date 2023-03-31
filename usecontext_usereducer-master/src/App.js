import { createContext, useReducer, useState } from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

export const CountContext = createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{ count, dispatch }}>
      <div className="App">
        {count}
        <ComponentA />
        <br />
        <hr />
        <ComponentB />
        <br />
        <hr />

        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default App;
