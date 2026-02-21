import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const TagCard = ({ tag }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="h-full"
    >
      <Link
        to={`/tag/${tag.slug}`}
        className="group block bg-panel border border-line rounded-2xl overflow-hidden hover:border-accent/60 transition duration-300 h-full"
      >

        {/* Top visual area */}
        <div className="h-40 bg-gradient-to-br from-accent/20 via-accent/5 to-transparent flex items-center justify-center p-6">
          <img
            src={tag.image}
            alt={tag.name}
            className="max-h-full max-w-full object-contain group-hover:scale-110 transition duration-300"
          />
        </div>


        {/* Content */}
        <div className="p-6 flex flex-col h-[calc(100%-9rem)]">

          {/* Title */}
          <h3 className="text-xl font-semibold tracking-tight">
            {tag.name}
          </h3>

          {/* Description */}
          <p className="text-subtext text-sm mt-3 line-clamp-3">
            {tag.description}
          </p>

          {/* Footer */}
          <div className="mt-auto pt-5 flex items-center justify-between text-xs text-subtext">

            <span className="capitalize bg-soft px-3 py-1 rounded-md">
              {tag.category}
            </span>

            <span>{tag.count} questions</span>
          </div>

        </div>

        {/* Trending badge */}
        {tag.trending && (
          <div className="absolute top-3 right-3 text-[11px] px-2 py-1 rounded-md bg-accent/20 text-accent font-medium">
            Trending
          </div>
        )}

      </Link>
    </motion.div>
  );
};
