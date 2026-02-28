import { useParams } from "react-router-dom";

export const QuestionDetails = () => {
  const { id } = useParams();

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">

      {/* 🔥 HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
          How to center a div in CSS?
        </h1>

        <div className="flex gap-4 text-sm text-subtext mt-3">
          <span>Asked 2 hours ago</span>
          <span>• 12 votes</span>
          <span>• 4 answers</span>
        </div>
      </div>

      {/* 🔥 QUESTION CARD */}
      <div className="relative bg-panel border border-line rounded-2xl p-7 mb-12 overflow-hidden">

        {/* Glow */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-accent/10 blur-2xl" />
        </div>

        <p className="relative text-base leading-relaxed text-textMain">
          I tried flexbox and margin auto but it still doesn't perfectly center
          vertically. What is the best modern approach to center a div both
          horizontally and vertically?
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-soft px-3 py-1 rounded-md text-xs hover:bg-accent/20 transition">
            #css
          </span>
          <span className="bg-soft px-3 py-1 rounded-md text-xs hover:bg-accent/20 transition">
            #html
          </span>
        </div>
      </div>

      {/* 🔥 ANSWERS HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Answers (3)
        </h2>
      </div>

      {/* 🔥 ANSWERS LIST */}
      <div className="space-y-6 mb-12">

        {/* Answer Card */}
        <div className="bg-panel border border-line rounded-xl p-6 hover:border-accent/40 transition">

          <p className="text-textMain leading-relaxed">
            You can use flexbox:
          </p>

          <div className="mt-4 bg-base border border-line rounded-lg p-4 text-sm font-mono text-subtext">
            display: flex;<br />
            justify-content: center;<br />
            align-items: center;
          </div>

          <div className="flex justify-between items-center mt-5 text-xs text-subtext">
            <span>2 hours ago</span>
            <span>👍 5 votes</span>
          </div>
        </div>

        {/* Answer Card */}
        <div className="bg-panel border border-line rounded-xl p-6 hover:border-accent/40 transition">

          <p className="text-textMain leading-relaxed">
            Grid is also a good option:
          </p>

          <div className="mt-4 bg-base border border-line rounded-lg p-4 text-sm font-mono text-subtext">
            display: grid;<br />
            place-items: center;
          </div>

          <div className="flex justify-between items-center mt-5 text-xs text-subtext">
            <span>5 hours ago</span>
            <span>👍 3 votes</span>
          </div>
        </div>

      </div>

      {/* 🔥 ANSWER FORM */}
      <div className="bg-panel border border-line rounded-2xl p-7">

        <h3 className="text-lg font-semibold mb-4">
          Your Answer
        </h3>

        <textarea
          rows="5"
          placeholder="Write your answer..."
          className="w-full bg-base border border-line rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition resize-none"
        />

        <button className="mt-5 bg-accent hover:bg-accentHover px-6 py-3 rounded-xl font-medium transition">
          Post Answer
        </button>

      </div>

    </div>
  );
};