import { Link } from "react-router-dom";
import { FiArrowUp, FiMessageCircle } from "react-icons/fi";
import { motion } from "framer-motion";

/* Scroll animation variant */
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
      className="bg-panel border border-line rounded-xl p-5 hover:border-accent/40 transition will-change-transform"
    >
      <div className="flex gap-6">

        {/* Votes */}
        <div className="flex flex-col items-center text-subtext text-sm min-w-[60px]">
          <FiArrowUp className="text-lg" />
          <span className="font-medium text-text">{question.votes}</span>
          <span>votes</span>
        </div>

        {/* Content */}
        <div className="flex-1">

          {/* Title */}
          <Link
            to={`/question/${question.id}`}
            className="text-lg font-semibold hover:text-accent transition"
          >
            {question.title}
          </Link>

          {/* Description */}
          <p className="text-subtext text-sm mt-2 line-clamp-2">
            {question.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {question.tags.map((tag) => (
              <span
                key={tag}
                className="bg-soft text-xs px-2 py-1 rounded-md text-subtext hover:text-text transition"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-4 text-xs text-subtext">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <FiMessageCircle /> {question.answers} answers
              </span>
            </div>

            <span>asked {question.time}</span>
          </div>

        </div>
      </div>
    </motion.div>
  );
};
