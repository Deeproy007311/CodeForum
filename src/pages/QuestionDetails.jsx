import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQuestions } from "../context/QuestionsContext";

export const QuestionDetails = () => {
  const { id } = useParams();
  const { getQuestionById, addAnswer } = useQuestions();

  const question = getQuestionById(id);
  // ✅ ADD IT HERE
  console.log("FULL QUESTION 👉", question);
  const [answerText, setAnswerText] = useState("");

  if (!question) return <p>Question not found</p>;

  const handleSubmit = () => {
    if (!answerText.trim()) return;
    addAnswer(id, answerText);
    setAnswerText("");
  };


  return (
    <div className="max-w-5xl mx-auto px-4 py-16">

      {/* Title */}
      <h1 className="text-3xl font-semibold mb-2">
        {question.title}
      </h1>

      <p className="text-subtext mb-6">
        {question.time} • {question.votes} votes • {question.answers.length} answers
      </p>

      {/* Description */}
      <div className="bg-panel border border-line rounded-xl p-6 mb-10">
        {question.description}

        <div className="flex gap-2 mt-4">
          {question.tags.map(tag => (
            <span key={tag} className="bg-soft px-2 py-1 text-xs rounded">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Answers */}
      <h2 className="text-xl font-semibold mb-4">
        Answers ({question.answers.length})
      </h2>

      <div className="space-y-4 mb-10">
        {question.answers.map((a) => (
          <div
            key={a.id}
            className="bg-panel border border-line rounded-xl p-5"
          >
            <p className="text-sm leading-relaxed">
              {a.content}
            </p>

            <div className="flex justify-between text-xs text-subtext mt-3">
              <span>{a.time}</span>
              <span>👍 {a.votes} votes</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add Answer */}
      <textarea
        value={answerText}
        onChange={(e) => setAnswerText(e.target.value)}
        placeholder="Write your answer..."
        className="w-full bg-panel border border-line rounded-xl p-4 mb-4"
      />

      <button
        onClick={handleSubmit}
        className="bg-accent px-5 py-2 rounded-lg"
      >
        Post Answer
      </button>

    </div>
  );
};