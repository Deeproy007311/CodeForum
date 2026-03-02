import { useParams } from "react-router-dom";
import { tagsData } from "../../data/tagsData";
import { QuestionCard } from "../questions/QuestionCard";
import { useQuestions } from "../../context/QuestionsContext";

export const TagDetails = () => {
  const { slug } = useParams();

  // ✅ real questions from context
  const { questions } = useQuestions();

  // find tag info
  const tag = tagsData.find(t => t.slug === slug);

  // filter questions based on tag
  const filteredQuestions = questions.filter(q =>
    q.tags.includes(slug)
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-14">

      {/* HEADER */}
      <div className="bg-panel border border-line rounded-2xl p-8 mb-10 relative overflow-hidden">

        {/* subtle glow */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-accent/20 blur-3xl rounded-full" />
        </div>

        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl font-semibold">
              {tag?.name || slug}
            </h1>

            <p className="text-subtext mt-3 max-w-2xl">
              {tag?.description ||
                `Questions and discussions related to ${slug}.`}
            </p>

            <div className="flex items-center gap-3 mt-5 text-sm text-subtext flex-wrap">
              <span className="bg-soft px-3 py-1 rounded-md capitalize">
                {tag?.category || "general"}
              </span>

              <span>{filteredQuestions.length} questions</span>

              {tag?.trending && (
                <span className="text-accent font-medium">🔥 Trending</span>
              )}
            </div>
          </div>

          {/* RIGHT */}
          <button className="border border-line px-5 py-2 rounded-xl hover:border-accent hover:text-accent transition">
            Follow Tag
          </button>

        </div>
      </div>


      {/* FILTER BAR (UI only) */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">

        <div className="flex gap-3">
          <button className="bg-panel border border-line px-4 py-2 rounded-lg text-sm hover:border-accent transition">
            Newest
          </button>
          <button className="bg-panel border border-line px-4 py-2 rounded-lg text-sm hover:border-accent transition">
            Unanswered
          </button>
          <button className="bg-panel border border-line px-4 py-2 rounded-lg text-sm hover:border-accent transition">
            Most Votes
          </button>
        </div>

        <input
          type="text"
          placeholder={`Search in ${slug}...`}
          className="w-full md:w-80 bg-panel border border-line rounded-xl px-4 py-3 outline-none focus:border-accent transition"
        />
      </div>


      {/* QUESTIONS */}
      <div className="space-y-5">

        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q) => (
            <QuestionCard key={q.id} question={q} />
          ))
        ) : (
          <div className="bg-panel border border-line rounded-xl p-10 text-center">

            <p className="text-subtext mb-4">
              No questions found for this tag.
            </p>

            <p className="text-sm text-subtext">
              Be the first to ask something about{" "}
              <span className="text-accent font-medium">
                {tag?.name || slug}
              </span>
            </p>

          </div>
        )}

      </div>

    </div>
  );
};