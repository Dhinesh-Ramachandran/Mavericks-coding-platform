import React from "react";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen bg-black text-white flex flex-col items-center justify-center relative">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.giphy.com/media/3o6Zt8MgUuvSbkZYWc/giphy.gif')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-3xl"></div>

      {/* Menu Container */}
      <div className="relative z-10 w-[90%] md:w-[600px] p-8 rounded-[2rem] bg-white/10 border border-white/20 backdrop-blur-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-8">📜 Mavericks Menu</h1>
        <div className="grid grid-cols-1 gap-4">
          {/* Code Editor option removed */}
          <button
            className="px-6 py-4 rounded-xl bg-white/5 hover:bg-cyan-500/20 transition text-left"
            onClick={() => navigate('/assessments')}
          >
            📝 Assessments
          </button>
          <button
            className="px-6 py-4 rounded-xl bg-white/5 hover:bg-cyan-500/20 transition text-left"
            onClick={() => navigate('/hackathon')}
          >
            🏆 Hackathon
          </button>
          <button
            className="px-6 py-4 rounded-xl bg-white/5 hover:bg-cyan-500/20 transition text-left"
            onClick={() => navigate('/ai-explainer')}
          >
            🤖 AI Concept Explainer
          </button>
          <button
            className="px-6 py-4 rounded-xl bg-white/5 hover:bg-cyan-500/20 transition text-left"
            onClick={() => navigate('/leaderboard')}
          >
            📊 Leaderboard
          </button>
          <button
            className="px-6 py-4 rounded-xl bg-white/5 hover:bg-cyan-500/20 transition text-left"
            onClick={() => navigate('/ai-resume')}
          >
            📄 AI Resume Analyzer
          </button>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-8 w-full py-3 rounded-xl bg-cyan-400 text-black hover:bg-cyan-500 transition"
        >
          ⬅ Back to Dashboard
        </button>
      </div>
    </div>
  );
}
