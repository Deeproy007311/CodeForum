import { contributorsData } from "../data/contributors";
import { ContributorCard } from "../components/contributors/ContriCard";
import { motion } from "framer-motion";

export const TopContributors = () => {

  return (
    <section className="relative max-w-6xl mx-auto px-4 py-24">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 w-[500px] h-[300px] -translate-x-1/2 -translate-y-1/2 bg-accent/10 blur-3xl rounded-full" />
      </div>

      {/* Header */}
      <div className="text-center mb-14">
        <span className="px-3 py-1 text-xs rounded-full bg-soft border border-line text-subtext">
          🧑‍💻 Community Leaders
        </span>

        <h2 className="text-3xl md:text-4xl font-semibold mt-4">
          Top Contributors
        </h2>

        <p className="text-subtext mt-3">
          Meet the developers helping others grow every day
        </p>
      </div>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
      >
        {contributorsData.map((user, index) => (
          <ContributorCard key={user.id} user={user} index={index} />
        ))}
      </motion.div>

    </section>
  );
};