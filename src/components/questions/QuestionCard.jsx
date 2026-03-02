import { Link } from "react-router-dom";
import { FiArrowUp, FiMessageCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export const QuestionCard = ({ question }) => {
  return (
    <motion.div
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.995 }}
      className="relative bg-panel/80 backdrop-blur border border-line rounded-2xl p-5 hover:border-accent/50 transition duration-300 shadow-soft group"
    >
      <div className="flex gap-6">

        {/* 🔥 LEFT: Stats */}
        <div className="flex flex-col items-center gap-4 min-w-[70px]">

          {/* Votes */}
          <div className="flex flex-col items-center text-xs text-subtext group-hover:text-text transition">
            <FiArrowUp className="text-lg mb-1" />
            <span className="font-semibold text-text text-sm">
              {question.votes}
            </span>
            <span>votes</span>
          </div>

          {/* Answers */}
          <div className="flex flex-col items-center text-xs text-subtext group-hover:text-text transition">
            <FiMessageCircle className="text-lg mb-1" />
            <span className="font-semibold text-text text-sm">
              {question.answers.length}
            </span>
            <span>answers</span>
          </div>

        </div>

        {/* 📦 RIGHT: Content */}
        <div className="flex-1">

          {/* Title */}
          <Link
            to={`/question/${question.id}`}
            className="text-lg font-semibold leading-snug hover:text-accent transition"
          >
            {question.title}
          </Link>

          {/* Description */}
          <p className="text-subtext text-sm mt-2 line-clamp-2">
            {question.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {question.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-md bg-soft text-subtext hover:bg-accent/20 hover:text-accent transition cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-5 text-xs text-subtext">

            {/* Meta */}
            <div className="flex items-center gap-4">
              <span className="group-hover:text-text transition">
                💬 {question.answers.length} answers
              </span>
            </div>

            {/* Time */}
            <span className="group-hover:text-text transition">
              asked {question.time}
            </span>
          </div>

        </div>
      </div>

      {/* ✨ Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-accent/5 blur-xl pointer-events-none"></div>
    </motion.div>
  );
};