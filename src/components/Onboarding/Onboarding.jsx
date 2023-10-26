import React from 'react';
import './Onboarding.css'; 
import img1 from "./images/img1.png"

const Onboarding = () => {
  return (
    <div className="onboarding-container">
      <div className="left-part">
        <img src={img1} alt='House Party'/>
        <h2>Your one stop shop for every event</h2>
      </div>
      <div className="right-part">
        <div className="form-card">
          <h3>Sign in to plan your party!</h3>
          <form>
            <div className="form-group">
              <h4>Email</h4>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <h4>Password</h4>
              <input type="password" id="password" name="password" />
            </div>
            <button type="submit">Lets Party</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
