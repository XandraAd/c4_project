/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Formsbg from '../assets/images/formbg.png'

const PassRecovery = () => {
  const[user,setUser]= useState({ email: '' });
  const [errors, setErrors] = useState({ emailError: '' });


  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handlePassRecovery= (e)=> {
e.preventDefault()


   // Validation logic for email
   let isValid = true;
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (!user.email.trim() || !emailRegex.test(user.email)) {
     setErrors({
       emailError: 'Please enter a valid email address.'
     });
     isValid = false;
   } else {
     setErrors({
       emailError: ''
     });
   }

   if (isValid) {
    // Retrieve user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    // Check if the email provided matches any stored user's email
    const userWithEmail = storedUserData.find((storedUser) => storedUser.email === user.email);

    if (userWithEmail) {
      // Simulate sending a recovery code to the provided email
      const recoveryCode = generateRecoveryCode(); // Replace this with your code generation logic
      sendRecoveryEmail(userWithEmail.email, recoveryCode);

      console.log('Recovery code sent to email:', user.email);
      // Redirect to a confirmation page or proceed with the recovery process
    } else {
      // Handle scenario where the provided email doesn't match any stored user
      console.log('No user found with this email.');
      // Show an error message or handle it as required
    }
  }
};

// Simulated function to generate a recovery code
const generateRecoveryCode = () => {
  // Generate a random recovery code logic or fetch it from the backend
  return Math.random().toString(36).substring(2, 8); // Example: Generate a 6-character recovery code
};

// Simulated function to send recovery email (console log for demonstration)
const sendRecoveryEmail = (email, recoveryCode) => {
  // This is a simulated function to log the email and recovery code
  console.log(`Sending recovery code ${recoveryCode} to email ${email}`);
  // In a real application, you would send an email to the provided email address with the recovery code
};

  
  return (
    <>
    <div className='recoveryForm'>
    <div className='passrec'>
    <h2>Forgot Password</h2>
    <h6>Enter the email address you used when you joined and we’ll send you instructions to reset your password</h6>
      <form onSubmit={handlePassRecovery}>
        <div>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            {errors.emailError && <span className="error">{errors.emailError}</span>}
          </label>
        </div>
       
        <div className='passrecBtn'>
          <button type="submit"  className='passrecBtn'>Send recovery Code</button>
        </div>
        <span className="material-symbols-outlined passrecsign">
keyboard_backspace
</span>
        <p className='backToSign'>
      <Link to='/login'>Back to sign in </Link></p>
      </form>
    </div>
    <div>
      <img src={Formsbg} alt="" />
    </div>
    </div>
   
    </>
   
  )
}

export default PassRecovery