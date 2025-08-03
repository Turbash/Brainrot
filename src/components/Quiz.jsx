import React, { useState } from "react";
import Question from "./Question.jsx";

const questions = [
  {
    question: "Who is this legendary brainrot creature?",
    image: "https://i.namu.wiki/i/0ypi7e-TRDnvnfZElFbgO_czhD428hpT2aUes1xaHh961pDetN1q4a5PCwrvosg49dqqAm5Xd2BCnE_gcBY9-FxXB1gque4M6ST5b09BqNY8U2u48eu-AJSViMqsUQHv9z-ZlmnM69Pq6jDwB069lA.webp", 
    options: [
      { text: "Tung Tung Tung Sahur", score: 6 },
      { text: "Lirily Larila", score: 3 },
      { text: "Brr Brr Patapim", score: 2 },
      { text: "Meme Man", score: 0 },
    ],
  },
  {
    question: "What is the name of this Italian brainrot meme?",
    image: "https://i.namu.wiki/i/jy227FE9-yfxgPIWni3gC7GimCKFzSI2QdMxw6zrbu9vZt4mCmy5l4sEiswvGvNrIfSKOPl5lv6K_j89LSsirP9MT3VVbbFk0sYwkdYRlshCWV4eKgnS1_38-ffp1JJPg3vzpG0BPdSfQ3CRrVE1Jw.webp", 
    options: [
      { text: "Traliliro Trala", score: 9 },
      { text: "Tung Tung Tung Sahur", score: 3},
      { text: "Ballerina Cappuccina", score: 5 },
      { text: "Sharky boy", score: 0 },
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