import React from "react";
import "./HowItWorks.css";
import step1 from "./images/step1.png";
import step2 from "./images/step2.png";
import step3 from "./images/step3.png";

const HowItWorks = () => {
  return (
    <div className="howCards-parent">
      <div className="howCard">
        <h2>How Houseparty Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-img-container">
              <img src={step1} alt="Step 1" />
            </div>
            <p>Plan the event</p>
          </div>
          <div className="step">
            <div className="step-img-container">
              <img src={step2} alt="Step 2" />
            </div>

            <p>Make the invites</p>
          </div>
          <div className="step">
            <div className="step-img-container">
              <img src={step3} alt="Step 3" />
            </div>
            <p>Book the venue</p>
          </div>
        </div>

        <p className="bottom-text">
        Planning a party has never been this easy. Create events, invites and book a venue in one go.
Who says party planning isn’t fun?
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;
