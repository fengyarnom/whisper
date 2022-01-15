import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.scss';
import App from './App';
import Admin from './pages/Admin'
ReactDOM.render(
  <React.StrictMode>
     <Router>
      <Routes>
        <Route path='*' element={<App/>} />
        <Route path='/Admin' element={<Admin/>} />
      </Routes>
     </Router>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

