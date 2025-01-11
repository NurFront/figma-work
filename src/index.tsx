import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Admin from './components/Admin'; // Путь к Admin

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/admin' element={<Admin/>} /> 
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
