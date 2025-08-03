
const Intro = ({ onStart }) => (
  <section className="w-full min-h-screen flex flex-col items-center justify-center">
    <div className="max-w-2xl w-full mx-auto text-center bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 rounded-3xl shadow-2xl p-12 border-4 border-pink-500">
      <h2 className="text-5xl font-extrabold mb-8 text-pink-400 drop-shadow-xl font-mono tracking-tight">🧠 How Terminal Is Your Brainrot?</h2>
      <p className="mb-10 text-gray-200 text-2xl font-semibold leading-relaxed">
        Welcome to the dangerously relatable and slightly concerning quiz game that tells you just how cooked your brain is by the internet.<br /><br />
        Are you still human, or are you 💀 terminally online? Find out in minutes.<br />
        <span className="block mt-4 text-pink-300 text-lg italic">Inspired by doomscrolling, meme addiction, and TikTok-core humor.</span>
      </p>
      <button
        className="mt-6 px-10 py-5 bg-pink-600 hover:bg-pink-700 text-white text-3xl font-black rounded-full shadow-xl transition-all duration-200 tracking-widest border-4 border-pink-400 hover:scale-105 hover:rotate-1 animate-pulse"
        style={{ letterSpacing: '0.12em' }}
        onClick={onStart}
      >
        🚀 Start Quiz
      </button>
    </div>
  </section>
);

export default Intro;