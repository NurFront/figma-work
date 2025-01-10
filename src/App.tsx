import React from 'react';
import './App.css';
import Header from './components/Header';
import Feater from './components/Feater';
import Personal from './components/Personal';
import Stars from './components/Stars';
import Passion from './components/Passion';
import Articles from './components/Articles';
import Finish from './components/Finish';

function App() {
  return (
    <>
      <Header />
      <Feater />
      <Personal />
      <Stars />
      <Passion />
      <Articles />
      <Finish />
    </>
  );
}

export default App;