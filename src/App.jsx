import { useState } from "react";

import IntroPage from "./components/IntroPage.jsx";
import Quiz from "./components/Quiz.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [step, setStep] = useState("intro");
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  const handleStart = () => setStep("quiz");
  const handleFinish = (finalScore, calculatedMaxScore) => {
    setScore(finalScore);
    setMaxScore(calculatedMaxScore);
    setStep("result");
  };

  return (
    <main className={step === "intro" ? "min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-pink-700 via-purple-900 to-gray-900" : "min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900"}>
      {step === "intro" && (
        <IntroPage onStart={handleStart} />
      )}
      {step === "quiz" && <Quiz onFinish={handleFinish} />}
      {step === "result" && (
        <Result score={score} maxScore={maxScore} onRestart={() => {
          setScore(0);
          setMaxScore(0);
          setStep("intro");
        }} />
      )}
    </main>
  );
}

export default App;
