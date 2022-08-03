// @ts-nocheck
// import { Router } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import Success from './Success';
import Pay from './Pay';
// import { BrowserRouter } from 'react-router-dom';
// const React = require('react');

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/pay" element={<Pay />} />
        <Route exact path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
