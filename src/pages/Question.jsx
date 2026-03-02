import { QuestionCard } from "../components/questions/QuestionCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useQuestions } from "../context/QuestionsContext";

export const Question = () => {
  const { questions } = useQuestions();

  // animation variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative max-w-5xl mx-auto px-4 py-20">

      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 w-[500px] h-[300px] -translate-x-1/2 bg-accent/10 blur-3xl rounded-full" />
      </div>

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">

        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Latest Questions
          </h2>
          <p className="text-subtext text-sm mt-1">
            Discover what developers are asking right now
          </p>
        </div>

        <div className="flex items-center gap-3">

          {/* Filters (static for now) */}
          <div className="hidden md:flex gap-2 text-sm">
            <span className="px-3 py-1 rounded-lg bg-soft text-text cursor-pointer">
              All
            </span>
            <span className="px-3 py-1 rounded-lg text-subtext hover:text-text cursor-pointer transition">
              Trending
            </span>
            <span className="px-3 py-1 rounded-lg text-subtext hover:text-text cursor-pointer transition">
              Unanswered
            </span>
          </div>

          {/* View all */}
          <Link
            to="/tags"
            className="text-sm text-accent hover:underline"
          >
            View All →
          </Link>
        </div>
      </div>

      {/* FEED */}
      {questions.length === 0 ? (
        <p className="text-subtext">No questions yet. Be the first to ask 🚀</p>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-5"
        >
          {questions.slice(0, 4).map((q) => (
            <motion.div key={q.id} variants={item}>
              <QuestionCard question={q} />
            </motion.div>
          ))}
        </motion.div>
      )}

    </section>
  );
};