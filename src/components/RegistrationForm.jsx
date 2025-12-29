import React, { useReducer } from 'react';
import Step1Personal from './Step1Personal';
import Step2Account from './Step2Account';
import Step3Review from './Step3Review';

// Initial state
const initialState = {
  // Form values
  name: '',
  email: '',
  username: '',
  password: '',
  
  // Current step (1, 2, or 3)
  currentStep: 1,
  
  // Submission state
  isSubmitted: false
};

// Action types
const UPDATE_FIELD = 'UPDATE_FIELD';
const NEXT_STEP = 'NEXT_STEP';
const PREVIOUS_STEP = 'PREVIOUS_STEP';
const SUBMIT_FORM = 'SUBMIT_FORM';
const RESET_FORM = 'RESET_FORM';

// Reducer function (Pure, Predictable, No side effects)
function formReducer(state, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        [action.field]: action.value
      };
      
    case NEXT_STEP:
      return {
        ...state,
        currentStep: state.currentStep + 1
      };
      
    case PREVIOUS_STEP:
      return {
        ...state,
        currentStep: state.currentStep - 1
      };
      
    case SUBMIT_FORM:
      return {
        ...state,
        isSubmitted: true
      };
      
    case RESET_FORM:
      return initialState;
      
    default:
      return state;
  }
}

const RegistrationForm = () => {
  // useReducer hook
  const [state, dispatch] = useReducer(formReducer, initialState);
  
  // Handler functions
  const handleFieldChange = (field, value) => {
    dispatch({ type: UPDATE_FIELD, field, value });
  };
  
  const handleNext = () => {
    dispatch({ type: NEXT_STEP });
  };
  
  const handlePrevious = () => {
    dispatch({ type: PREVIOUS_STEP });
  };
  
  const handleSubmit = () => {
    dispatch({ type: SUBMIT_FORM });
    console.log('Form Submitted:', {
      name: state.name,
      email: state.email,
      username: state.username,
      password: state.password
    });
  };
  
  const handleReset = () => {
    dispatch({ type: RESET_FORM });
  };
  
  // If form is submitted, show success message
  if (state.isSubmitted) {
    return (
      <div className="success-message">
        <div className="success-icon">✅</div>
        <h2>Registration Successful!</h2>
        <p><strong>Name:</strong> {state.name}</p>
        <p><strong>Email:</strong> {state.email}</p>
        <p><strong>Username:</strong> {state.username}</p>
        <button onClick={handleReset} className="btn-primary" style={{ marginTop: '2rem' }}>
          Register Another User
        </button>
      </div>
    );
  }
  
  return (
    <div className="form-container">
      {/* Step Indicator */}
      <div className="step-indicator">
        <div className={`step ${state.currentStep >= 1 ? 'active' : ''} ${state.currentStep > 1 ? 'completed' : ''}`}>
          <div className="step-number">1</div>
          <div className="step-label">Personal</div>
        </div>
        <div className={`step ${state.currentStep >= 2 ? 'active' : ''} ${state.currentStep > 2 ? 'completed' : ''}`}>
          <div className="step-number">2</div>
          <div className="step-label">Account</div>
        </div>
        <div className={`step ${state.currentStep >= 3 ? 'active' : ''}`}>
          <div className="step-number">3</div>
          <div className="step-label">Review</div>
        </div>
      </div>
      
      {/* Render current step */}
      {state.currentStep === 1 && (
        <Step1Personal 
          state={state}
          onFieldChange={handleFieldChange}
          onNext={handleNext}
        />
      )}
      
      {state.currentStep === 2 && (
        <Step2Account 
          state={state}
          onFieldChange={handleFieldChange}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
      
      {state.currentStep === 3 && (
        <Step3Review 
          state={state}
          onSubmit={handleSubmit}
          onPrevious={handlePrevious}
        />
      )}
    </div>
  );
};

export default RegistrationForm;
