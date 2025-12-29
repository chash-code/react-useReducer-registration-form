import React from 'react';

const Step2Account = ({ state, onFieldChange, onNext, onPrevious }) => {
  const handleNext = (e) => {
    e.preventDefault();
    
    // Validation
    if (!state.username || !state.password) {
      alert('Please fill in all fields');
      return;
    }
    
    if (state.password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }
    
    onNext();
  };
  
  return (
    <form onSubmit={handleNext}>
      <h2 style={{ marginBottom: '1.5rem', color: '#2c3e50' }}>
        Step 2: Account Details
      </h2>
      
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          value={state.username}
          onChange={(e) => onFieldChange('username', e.target.value)}
          placeholder="Choose a username"
          required
        />
      </div>
      
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={state.password}
          onChange={(e) => onFieldChange('password', e.target.value)}
          placeholder="Choose a password (min 6 characters)"
          required
          minLength={6}
        />
      </div>
      
      <div className="button-group">
        <button type="button" onClick={onPrevious} className="btn-secondary">
          ← Previous
        </button>
        <button type="submit" className="btn-primary">
          Next Step →
        </button>
      </div>
    </form>
  );
};

export default Step2Account;
