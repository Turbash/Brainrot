import React from "react";

const Question = ({ question, options, onAnswer, image, largeImage }) => (
  <div className="w-full">
    <h3 className="text-3xl font-extrabold mb-8 text-pink-400 text-center drop-shadow-lg">{question}</h3>
    {image && (
      <div className="flex justify-center mb-8">
        <img src={image} alt="meme" className={largeImage ? "max-h-[350px] w-auto rounded-2xl shadow-2xl border-4 border-pink-400" : "max-h-56 rounded-xl shadow-lg border-2 border-pink-400"} />
      </div>
    )}
    <div className="flex flex-col gap-6">
      {options.map((opt, idx) => (
        <button
          key={idx}
          className="bg-gray-700 hover:bg-pink-600 text-white py-5 px-8 rounded-xl shadow-lg transition-all duration-150 text-2xl font-bold flex items-center gap-4"
          onClick={() => onAnswer(opt.score)}
        >
          {opt.image && (
            <img src={opt.image} alt="option meme" className="h-32 w-64 rounded-xl" />
          )}
          {opt.text}
        </button>
      ))}
    </div>
  </div>
);

export default Question;
