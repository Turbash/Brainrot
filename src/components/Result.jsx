import React from "react";

const getResultText = (score, maxScore) => {
  const percent = Math.round((score / maxScore) * 100);
  if (percent >= 80) {
    return "💀 Terminally Online: You are the embodiment of internet culture. Touch grass immediately.";
  } else if (percent >= 60) {
    return "Brainrot Detected: You know your memes, but there's hope for you yet.";
  } else if (percent >= 40) {
    return "Mildly Cooked: You dabble in the digital, but still have a grip on reality.";
  } else {
    return "Still Human: You are mostly free from the internet's grasp. Stay strong!";
  }
};

const Result = ({ score, maxScore, onRestart }) => {
  const percent = Math.round((score / maxScore) * 100);
  const resultText = getResultText(score, maxScore);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen rounded-xl shadow-lg p-8 animate-fade-in">
      <h2 className="text-4xl font-extrabold mb-4 text-pink-400 drop-shadow-lg glitch">Your Brainrot Level</h2>
      <div className="relative flex items-center justify-center mb-6">
        <span className="text-7xl font-black text-pink-500 animate-pulse drop-shadow-xl">{percent}%</span>
        <span className="absolute top-0 right-[-2.5rem] text-3xl">🧠</span>
      </div>
      <p className="text-2xl font-semibold mb-8 text-white text-center max-w-xl">{resultText}</p>
      <button
        className="mt-8 px-10 py-5 bg-gradient-to-r from-pink-600 via-purple-700 to-pink-600 text-white text-3xl font-black rounded-full shadow-2xl transition-all duration-200 tracking-widest border-4 border-pink-400 hover:scale-105 hover:rotate-1 hover:shadow-pink-500/40 animate-pulse"
        style={{ letterSpacing: '0.15em' }}
        onClick={onRestart}
      >
        <span className="inline-block mr-2 animate-spin-slow">🧠</span>
        <span className="glitch">TRY AGAIN</span>
      </button>
    </div>
  );
};

export default Result;