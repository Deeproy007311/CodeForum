import { motion } from "framer-motion";

export const ContributorCard = ({ user, index }) => {
  const rankColors = [
    "bg-yellow-500/20 text-yellow-400 border-yellow-500/30", // 🥇
    "bg-gray-400/20 text-gray-300 border-gray-400/30",      // 🥈
    "bg-orange-500/20 text-orange-400 border-orange-500/30" // 🥉
  ];

  return (
    <motion.div
  whileHover={{ y: -6 }} // ❌ remove scale (causes lag)
  transition={{ duration: 0.2 }}
  className="relative bg-panel/80 backdrop-blur border border-line rounded-2xl p-6 text-center hover:border-accent/50 transition group"
>

      {/* Rank Badge */}
      <div className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-md border ${rankColors[index] || "bg-soft text-subtext border-line"}`}>
        #{index + 1}
      </div>

      {/* Avatar */}
      <div className="relative w-20 h-20 mx-auto mb-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-full h-full rounded-full object-cover border border-line group-hover:border-accent transition"
        />

        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition"></div>
      </div>

      {/* Name */}
      <h3 className="font-semibold text-lg group-hover:text-accent transition">
        {user.name}
      </h3>

      {/* Stats */}
      <p className="text-sm text-subtext mt-1">
        {user.points} points
      </p>

      <p className="text-xs text-subtext mt-1">
        💬 {user.answers} answers
      </p>

    </motion.div>
  );
};