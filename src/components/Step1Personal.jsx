import React from 'react';

const Step1Personal = ({ state, onFieldChange, onNext }) => {
  const handleNext = (e) => {
    e.preventDefault();
    
    // Validation
    if (!state.name || !state.email) {
      alert('Please fill in all fields');
      return;
    }
    
    onNext();
  };
  
  return (
    <form onSubmit={handleNext}>
      <h2 style={{ marginBottom: '1.5rem', color: '#2c3e50' }}>
        Step 1: Personal Details
      </h2>
      
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={state.name}
          onChange={(e) => onFieldChange('name', e.target.value)}
          placeholder="Enter your full name"
          required
        />
      </div>
      
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={state.email}
          onChange={(e) => onFieldChange('email', e.target.value)}
          placeholder="Enter your email address"
          required
        />
      </div>
      
      <div className="button-group">
        <button type="submit" className="btn-primary">
          Next Step →
        </button>
      </div>
    </form>
  );
};

export default Step1Personal;
