// import your dependencies
import React from 'react';
//alternative import statement: import { Component } from 'react';
import { render } from 'react-dom';     //in first import statement, we need the whole package; on this import statement we only want the render method
// when importing components, import using the file name
import App from "./components/App";  
import './css/style.css';   // importing the css stuff

render(<App />, document.querySelector("#main")); 
