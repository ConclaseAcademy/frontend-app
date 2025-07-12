import React from "react";
import "./getstartedpage.css";

export default function GetStartedPage() {
  return (
    <div className="outer-frame">
      <div className="inner-frame">
        <div className="header-block">
          <h1>Let's Get Started</h1>
          <p className="subtitle">
            Help us personalize your mental wellness journey in just 3 simple steps
          </p>
        </div>

        <div className="question-prompt">
          <h2>What brings you to Mental Companion today?</h2>
          <p className="explain">
            Understanding your primary focus helps us tailor your experience
          </p>
        </div>

        <div className="options">
          <button className="option-card">
            <span className="icon">😌</span>
            <div className="text-group">
              <strong>Managing Stress &amp; Anxiety</strong>
              <small>Work pressure, daily worries, or general anxiety</small>
            </div>
          </button>

          <button className="option-card">
            <span className="icon">🌈</span>
            <div className="text-group">
              <strong>Improving Mood &amp; Emotional Well-being</strong>
              <small>Feeling down, mood swings, or emotional balance</small>
            </div>
          </button>

          <button className="option-card">
            <span className="icon">😴</span>
            <div className="text-group">
              <strong>Better Sleep &amp; Relaxation</strong>
              <small>Trouble sleeping, racing thoughts, or need to unwind</small>
            </div>
          </button>
        </div>

        <div className="cta">
          <a href="index.htm" className="arrow">
            <button id="getStartedBtn">Get started</button>
          </a>
        </div>
      </div>
    </div>
  );
}