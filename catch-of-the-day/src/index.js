// import your dependencies
import React from 'react';
//alternative import statement: import { Component } from 'react';
import { render } from 'react-dom';     //in first import statement, we need the whole package; on this import statement we only want the render method
import StorePicker from './components/StorePicker';     // when importing components, import using the file name

render(<StorePicker />, document.querySelector("#main")); 
