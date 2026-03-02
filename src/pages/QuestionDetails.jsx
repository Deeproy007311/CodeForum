import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQuestions } from "../context/QuestionsContext";

export const QuestionDetails = () => {
  const { id } = useParams();
  const { getQuestionById, addAnswer, voteQuestion, voteAnswer } = useQuestions();

  const question = getQuestionById(id);
  console.log("FULL QUESTION 👉", question);

  const [answerText, setAnswerText] = useState("");

  if (!question) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 text-subtext">
        Question not found
      </div>
    );
  }

  const handleSubmit = () => {
    if (!answerText.trim()) return;
    addAnswer(id, answerText);
    setAnswerText("");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">

      {/* 🔥 HEADER + QUESTION VOTING */}
      <div className="flex gap-6 mb-8">

        {/* Voting */}
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={() => voteQuestion(id, "up")}
            className="text-xl hover:text-accent transition"
          >
            👍
          </button>

          <span className="font-semibold text-lg">
            {question.votes}
          </span>

          <button
            onClick={() => voteQuestion(id, "down")}
            className="text-xl hover:text-red-400 transition"
          >
            👎
          </button>
        </div>

        {/* Title + meta */}
        <div>
          <h1 className="text-3xl font-semibold">
            {question.title}
          </h1>

          <p className="text-subtext mt-2">
            {question.time} • {question.answers.length} answers
          </p>
        </div>

      </div>

      {/* 📦 DESCRIPTION */}
      <div className="bg-panel border border-line rounded-xl p-6 mb-10">
        <p className="text-sm leading-relaxed whitespace-pre-line">
          {question.description}
        </p>

        {/* Tags */}
        <div className="flex gap-2 mt-4 flex-wrap">
          {question.tags.map(tag => (
            <span
              key={tag}
              className="bg-soft px-2 py-1 text-xs rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* 💬 ANSWERS */}
      <h2 className="text-xl font-semibold mb-4">
        Answers ({question.answers.length})
      </h2>

      <div className="space-y-4 mb-10">
        {question.answers.map((a) => (
          <div
            key={a.id}
            className="bg-panel border border-line rounded-xl p-5 flex gap-4"
          >

            {/* Answer Voting */}
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={() => voteAnswer(id, a.id, "up")}
                className="text-lg hover:text-accent transition"
              >
                👍
              </button>

              <span className="text-sm font-semibold">
                {a.votes}
              </span>

              <button
                onClick={() => voteAnswer(id, a.id, "down")}
                className="text-lg hover:text-red-400 transition"
              >
                👎
              </button>
            </div>

            {/* Answer Content */}
            <div className="flex-1">
              <p className="text-sm leading-relaxed whitespace-pre-line">
                {a.content}
              </p>

              <div className="text-xs text-subtext mt-3">
                {a.time}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* ✍️ ADD ANSWER */}
      <div className="bg-panel border border-line rounded-xl p-5">

        <textarea
          value={answerText}
          onChange={(e) => setAnswerText(e.target.value)}
          placeholder="Write your answer..."
          className="w-full bg-transparent border border-line rounded-lg p-4 mb-4 outline-none focus:border-accent resize-none"
          rows={4}
        />

        <button
          onClick={handleSubmit}
          className="bg-accent hover:bg-accentHover px-6 py-2 rounded-lg font-medium transition"
        >
          Post Answer
        </button>

      </div>

    </div>
  );
};