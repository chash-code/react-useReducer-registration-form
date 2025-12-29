import React from 'react';

const Step3Review = ({ state, onSubmit, onPrevious }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ marginBottom: '1.5rem', color: '#2c3e50' }}>
        Step 3: Review & Submit
      </h2>
      
      <div className="review-section">
        <h3 style={{ marginBottom: '1rem', color: '#555' }}>
          Please review your information:
        </h3>
        
        <div className="review-item">
          <span className="review-label">Name:</span>
          <span className="review-value">{state.name}</span>
        </div>
        
        <div className="review-item">
          <span className="review-label">Email:</span>
          <span className="review-value">{state.email}</span>
        </div>
        
        <div className="review-item">
          <span className="review-label">Username:</span>
          <span className="review-value">{state.username}</span>
        </div>
        
        <div className="review-item">
          <span className="review-label">Password:</span>
          <span className="review-value">{'•'.repeat(state.password.length)}</span>
        </div>
      </div>
      
      <div className="button-group">
        <button type="button" onClick={onPrevious} className="btn-secondary">
          ← Previous
        </button>
        <button type="submit" className="btn-success">
          Submit ✓
        </button>
      </div>
    </form>
  );
};

export default Step3Review;
