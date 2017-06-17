import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", () => {
  var store;
  const currentUser = localStorage.getItem('currentUser');
  const main = document.getElementById("main");
  
  if (currentUser) {
    const preloadedState = { auth: { currentUser: currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={ store } />, main);
});