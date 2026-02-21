import { useEffect, useState } from "react";
import { QuestionCard } from "../components/questions/QuestionCard";
import { mockQuestions } from "../data/mockQuestions";

export const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  // simulate fetching from server
  useEffect(() => {
    const timer = setTimeout(() => {
      setQuestions(mockQuestions);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">

      {/* Section Header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Latest Questions
          </h2>
          <p className="text-subtext text-sm mt-1">
            Discover what developers are asking right now
          </p>
        </div>

        {!loading && (
          <span className="text-sm text-subtext">
            {questions.length} questions
          </span>
        )}
      </div>

      {/* Feed */}
      <div className="space-y-4">
        {loading ? (
          <p className="text-subtext">Loading questions...</p>
        ) : (
          questions.map((q) => (
            <QuestionCard key={q.id} question={q} />
          ))
        )}
      </div>

    </section>
  );
};
