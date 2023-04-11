import React from 'react'
import App from './App'
import GlobalStyles from './globalStyles'
import * as ReactDOMClient from 'react-dom/client';

const rootElement = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(rootElement);
root.render(
  <>
  <GlobalStyles /> 
  <App />
</>);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()