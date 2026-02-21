import { useParams } from "react-router-dom";
import { tagsData } from "../../data/tagsData";
import { mockQuestions } from "../../data/mockQuestions";
import { QuestionCard } from "../questions/QuestionCard";

export const TagDetails = () => {
  const { slug } = useParams();

  // find tag info
  const tag = tagsData.find(t => t.slug === slug);

  // filter questions based on tag
  const filteredQuestions = mockQuestions.filter(q =>
    q.tags.includes(slug)
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-14">

      {/* Tag Header */}
      <div className="bg-panel border border-line rounded-2xl p-8 mb-10">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Left */}
          <div>
            <h1 className="text-4xl font-semibold">
              {tag?.name || slug}
            </h1>

            <p className="text-subtext mt-3 max-w-2xl">
              {tag?.description ||
                `Questions and discussions related to ${slug}.`}
            </p>

            <div className="flex items-center gap-3 mt-5 text-sm text-subtext">
              <span className="bg-soft px-3 py-1 rounded-md capitalize">
                {tag?.category || "general"}
              </span>

              <span>{filteredQuestions.length} questions</span>

              {tag?.trending && (
                <span className="text-accent">Trending</span>
              )}
            </div>
          </div>

          {/* Follow button */}
          <button className="border border-line px-5 py-2 rounded-xl hover:border-accent hover:text-accent transition">
            Follow Tag
          </button>

        </div>
      </div>


      {/* Filters (UI only for now) */}
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


      {/* Questions List */}
      <div className="space-y-4">

        {filteredQuestions.length > 0 ? (
          filteredQuestions.map(q => (
            <QuestionCard key={q.id} question={q} />
          ))
        ) : (
          <div className="bg-panel border border-line rounded-xl p-6 text-subtext text-center">
            No questions found for this tag.
          </div>
        )}

      </div>

    </div>
  );
};