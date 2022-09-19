import React from "react"
import './App.css';
import Counter from "./Counter";
import Heading from "./Heading";
import { Provider } from "react-redux"
import Store from "./Store/store";

function App() {
  return (
    <Provider store={Store}>
      <div >
        <Heading></Heading>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
