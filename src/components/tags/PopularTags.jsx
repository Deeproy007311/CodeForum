import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { tagsData } from "../../data/tagsData";
import { TagCard } from "./TagCard";
import { motion } from "framer-motion";

export const PopularTags = () => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTags(tagsData);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // animations
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative max-w-6xl mx-auto px-4 py-24 overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/2 w-[400px] h-[400px] bg-accent/10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/2" />
      </div>

      {/* HEADER */}
      <div className="mb-14 text-center">

        {/* badge */}
        <div className="mb-4">
          <span className="px-3 py-1 text-xs rounded-full bg-soft border border-line text-subtext">
            🔥 Trending Technologies
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Popular Topics
        </h2>

        <p className="text-subtext mt-3 max-w-xl mx-auto">
          Explore discussions by technologies developers love and contribute to daily.
        </p>
      </div>

      {/* GRID */}
      {loading ? (
        <p className="text-subtext text-center">Loading topics...</p>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tags.slice(0, 8).map((tag) => (
            <motion.div key={tag.id} variants={item}>
              <TagCard tag={tag} />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* CTA */}
      {!loading && (
        <div className="mt-16 text-center">
          <Link
            to="/tags"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-panel border border-line hover:border-accent hover:text-accent transition shadow-soft"
          >
            View All Tags →
          </Link>
        </div>
      )}

    </section>
  );
};