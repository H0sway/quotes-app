// src/index.js

// Import react and react-dom
import React from 'react';
import ReactDOM from 'react-dom';

// Import the App.js component, give react something to render
import App from './App';

// Import the css file
import './index.css';

// Attach the App component to the div with the id "root" in our index.html file
ReactDOM.render(<App />, document.getElementById('root'));
