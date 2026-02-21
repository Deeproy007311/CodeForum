import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const TagCard = ({ tag }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="h-full"
    >
      <Link
        to={`/tag/${tag.slug}`}
        className="relative group block bg-panel/80 backdrop-blur border border-line rounded-2xl overflow-hidden hover:border-accent/60 transition duration-300 h-full"
      >

        {/* 🔥 Trending badge (FIXED) */}
        {tag.trending && (
          <div className="absolute top-3 right-3 text-[11px] px-2 py-1 rounded-md bg-accent/20 text-accent font-medium backdrop-blur">
            🔥 Trending
          </div>
        )}

        {/* ✨ Top visual area */}
        <div className="relative h-40 bg-gradient-to-br from-accent/20 via-accent/5 to-transparent flex items-center justify-center p-6 overflow-hidden">

          {/* glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-accent/10 blur-2xl"></div>

          <img
            src={tag.image}
            alt={tag.name}
            className="relative z-10 max-h-full max-w-full object-contain group-hover:scale-110 transition duration-300"
          />
        </div>

        {/* 📦 Content */}
        <div className="p-6 flex flex-col h-[calc(100%-10rem)]">

          {/* Title */}
          <h3 className="text-xl font-semibold tracking-tight group-hover:text-accent transition">
            {tag.name}
          </h3>

          {/* Description */}
          <p className="text-subtext text-sm mt-3 line-clamp-3">
            {tag.description}
          </p>

          {/* Footer */}
          <div className="mt-auto pt-5 flex items-center justify-between text-xs text-subtext">

            <span className="capitalize bg-soft px-3 py-1 rounded-md group-hover:bg-accent/20 group-hover:text-accent transition">
              {tag.category}
            </span>

            <span className="group-hover:text-text transition">
              {tag.count} questions
            </span>
          </div>

        </div>

      </Link>
    </motion.div>
  );
};