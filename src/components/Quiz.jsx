import React, { useState } from "react";
import Question from "./Question.jsx";

const questions = [
  {
    question: "How many hours do you spend online daily?",
    options: [
      { text: "<2", score: 0 },
      { text: "2-4", score: 1 },
      { text: "4-8", score: 3 },
      { text: ">8", score: 6 },
    ],
  },
  {
    question: "Pick your favorite meme format:",
    options: [
      { text: "Distracted Boyfriend", score: 3, image: "https://media.wired.com/photos/59a459d1e5238d59ce11404f/3:2/w_1600,c_limit/MemeLoveTriangle_297886754.jpg" },
      { text: "NPC Wojak", score: 5, image: "https://upload.wikimedia.org/wikipedia/en/1/1b/NPC_wojak_meme.png" },
      { text: "Sigma Grindset", score: 6, image: "https://www.boredpanda.com/blog/wp-content/uploads/2024/06/sigma-face-6.jpg" },
      { text: "I don't do memes", score: 0 },
    ],
  },
  {
    question: "How do you react to TikTok trends?",
    options: [
      { text: "Ignore them", score: 0 },
      { text: "Try a few", score: 2 },
      { text: "Know all the lore", score: 4 },
      { text: "I AM the trend", score: 6 },
    ],
  },
  {
    question: "Which best describes your doomscrolling habit?",
    options: [
      { text: "Never heard of it", score: 0 },
      { text: "Occasionally", score: 3 },
      { text: "Every night", score: 4 },
      { text: "I doomscroll in my sleep", score: 6 },
    ],
  },
  {
    question: "How many group chats are you in?",
    options: [
      { text: "0-2", score: 0 },
      { text: "3-5", score: 2 },
      { text: "6-10", score: 3 },
      { text: ">10", score: 5 },
    ],
  },
  {
    question: "Your reaction to a new viral challenge:",
    options: [
      { text: "Roll my eyes", score: 0 },
      { text: "Watch a few", score: 1 },
      { text: "Try it", score: 5 },
      { text: "Already did it", score: 6 },
    ],
  },
  {
    question: "How often do you use internet slang (e.g., 'rizz', 'gyatt')?",
    options: [
      { text: "Never", score: 0 },
      { text: "Sometimes", score: 2 },
      { text: "Daily", score: 4 },
      { text: "I invent new slang", score: 6 },
    ],
  },
  {
    question: "How many times have you said 'based' unironically?",
    options: [
      { text: "Never", score: 0 },
      { text: "Once or twice", score: 3 },
      { text: "A few times", score: 5 },
      { text: "Lost count", score: 7 },
    ],
  },
  {
    question: "Do you follow meme pages for news?",
    options: [
      { text: "No", score: 0 },
      { text: "Rarely", score: 3 },
      { text: "Sometimes", score: 5 },
      { text: "Yes, always", score: 6 },
    ],
  },
  {
    question: "How do you feel about touch grass?",
    options: [
      { text: "Love it", score: 0 },
      { text: "It's okay", score: 3 },
      { text: "What's grass?", score: 7 },
      { text: "I only touch pixels", score: 10 },
    ],
  },
];

const Quiz = ({ onFinish }) => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const maxScore = questions.reduce((sum, q) => {
    const maxOpt = Math.max(...q.options.map(opt => opt.score));
    return sum + maxOpt;
  }, 0);

  const handleAnswer = (scoreValue) => {
    setScore(score + scoreValue);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      onFinish(score + scoreValue, maxScore);
    }
  };

  const currentQuestion = questions[current];
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      <div className="w-full max-w-2xl p-8 bg-gray-800 rounded-2xl shadow-2xl flex flex-col items-center">
        <Question
          question={currentQuestion.question}
          options={currentQuestion.options}
          onAnswer={handleAnswer}
          image={currentQuestion.image}
          largeImage={!!currentQuestion.image}
        />
        <p className="mt-8 text-base text-gray-300 font-semibold">Question {current + 1} of {questions.length}</p>
      </div>
    </div>
  );
};

export default Quiz;