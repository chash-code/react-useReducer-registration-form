import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1 className="main-title">Multi-Step Registration Form</h1>
        <p className="subtitle">Using useReducer for State Management</p>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default App;
