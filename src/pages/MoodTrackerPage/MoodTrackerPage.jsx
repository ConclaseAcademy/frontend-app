import { useState } from "react";
import MoodStep1 from "./components/MoodStep1/MoodStep1";
import MoodStep2 from "./components/MoodStep2/MoodStep2";
import MoodStep3 from "./components/MoodStep3/MoodStep3";
import MoodStep4 from "./components/MoodStep4/MoodStep4";
import MoodStep5 from "./components/MoodStep5/MoodStep5";
import MoodStep6 from "./components/MoodStep6/MoodStep6";
import MoodTrackerUser from "./components/MoodTrackerUser/MoodTrackerUser";
import "./MoodTrackerPage.css";
import dayjs from 'dayjs';

// import { Steps, StepsProvider, useSteps } from "react-step-builder";

export default function MoodTrackerPage(){
    const today = dayjs().format("dddd, MMMM D, YYYY");
    const [currentStep, setCurrentStep] = useState(1)

    // getting state for form
    // const []
    function nextStepHandler(){
        setCurrentStep(prev => prev + 1)
    }

  return <div className="moodtrackerpage-container">
        <h3>{today}</h3>

        <div className="moodtrackerpage-content">
            <MoodTrackerUser />
            {currentStep == 1?<MoodStep1 onClick={nextStepHandler} />:null}
            {currentStep == 2?<MoodStep2 onClick={nextStepHandler} />:null}
            {currentStep ==3?<MoodStep3 onClick={nextStepHandler} />:null}
            {currentStep == 4?<MoodStep4 onClick={nextStepHandler} />:null}
            {currentStep ==5?<MoodStep5 onClick={nextStepHandler} />:null}
            {currentStep == 6?<MoodStep6 onClick={nextStepHandler} />:null}
        </div>

  </div>
}

