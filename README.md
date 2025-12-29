# react-useReducer-registration-form
# Multi-Step User Registration Form Using useReducer

A React application demonstrating state management using the `useReducer` hook instead of multiple `useState` hooks. This form walks users through a 3-step registration process.

## Project Structure
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── components/
│   │   ├── RegistrationForm.jsx
│   │   ├── Step1Personal.jsx
│   │   ├── Step2Account.jsx
│   │   └── Step3Review.jsx
└── package.json
## Form Steps

### Step 1: Personal Details
- Name (text input)
- Email (email input)

### Step 2: Account Details
- Username (text input)
- Password (password input)

### Step 3: Review & Submit
- Display all entered values
- Submit button

## State Management Rules

✅ **All form state managed using `useReducer`**  
❌ **NOT allowed to use multiple `useState` hooks**  
✅ **Reducer manages:**
- Form values (name, email, username, password)
- Current step (1, 2, or 3)
- Submission state (isSubmitted)

## Actions Supported

- `UPDATE_FIELD` - Update individual form fields
- `NEXT_STEP` - Move to next step
- `PREVIOUS_STEP` - Go back to previous step
- `SUBMIT_FORM` - Submit the form
- `RESET_FORM` - Reset all values

## UI Interaction Flow
User Input
↓
dispatch(action)
↓
reducer(state, action)
↓
updated state
↓
UI re-renders
## Technical Constraints

✅ Use functional components only  
✅ Use `useReducer` for state management  
✅ Reducer must be:
- Pure
- Predictable
- Free of side effects  
❌ Do not use external libraries (Formik, Redux, etc.)

## How to Run

```bash
npm install
npm start
