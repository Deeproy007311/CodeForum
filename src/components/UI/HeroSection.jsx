import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

export const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center border-b border-line overflow-hidden">

      {/* 🌌 Background */}
      <div className="absolute inset-0 -z-10">
        {/* gradient glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/30 blur-[160px]" />

        {/* grid overlay */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(to_right,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >

          {/* Badge */}
          <motion.div variants={item} className="mb-4">
            <span className="px-3 py-1 text-xs rounded-full bg-soft border border-line text-subtext">
              🚀 Built for Developers
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Where Developers{" "}
            <span className="text-accent">Solve Problems</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={item}
            className="mt-4 text-subtext text-lg max-w-lg"
          >
            Ask questions, share knowledge, and grow with a community of passionate developers.
          </motion.p>

          {/* Search */}
          <motion.div variants={item} className="mt-8 max-w-md">
            <div className="flex items-center bg-panel border border-line rounded-xl px-4 py-3 focus-within:border-accent transition">
              <FiSearch className="text-subtext mr-3" />
              <input
                type="text"
                placeholder="Search questions..."
                className="bg-transparent outline-none w-full text-sm placeholder:text-subtext"
              />
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={item}
            className="mt-6 flex items-center gap-4"
          >
            <Link
              to="/ask"
              className="relative px-6 py-3 rounded-xl font-medium bg-accent hover:bg-accentHover transition shadow-soft"
            >
              Ask Question
            </Link>

            <Link
              to="/tags"
              className="px-6 py-3 rounded-xl font-medium bg-soft hover:bg-panel transition"
            >
              Browse Tags
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL (NEW 🔥) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:block"
        >
          {/* floating card */}
          <div className="bg-panel border border-line rounded-2xl p-5 shadow-soft backdrop-blur">

            <p className="text-sm text-subtext mb-2">Example Question</p>

            <h3 className="text-lg font-semibold mb-3">
              How to optimize React performance?
            </h3>

            <div className="flex gap-2 flex-wrap mb-3">
              <span className="text-xs bg-soft px-2 py-1 rounded">react</span>
              <span className="text-xs bg-soft px-2 py-1 rounded">performance</span>
              <span className="text-xs bg-soft px-2 py-1 rounded">hooks</span>
            </div>

            <p className="text-xs text-subtext">💬 12 Answers • 👍 45 Votes</p>
          </div>

          {/* floating glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/30 blur-3xl rounded-full"></div>
        </motion.div>

      </div>
    </section>
  );
};