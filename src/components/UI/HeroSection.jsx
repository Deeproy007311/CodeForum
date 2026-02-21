import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

export const Hero = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 25 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <section className="relative min-h-[calc(100vh-64px)] flex items-center border-b border-line overflow-hidden">


            {/* background glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/30 blur-[160px]" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-5xl mx-auto px-4 text-center w-full"
            >



                {/* Heading */}
                <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                    Where Developers <span className="text-accent">Solve Problems</span>
                </motion.h1>


                <motion.p variants={item} className="mt-4 text-subtext text-lg max-w-2xl mx-auto">
                    Ask questions, share knowledge, and learn from other developers in a clean distraction-free environment.
                </motion.p>


                {/* Search */}
                <motion.div variants={item} className="mt-10 max-w-2xl mx-auto">
                    <div className="flex items-center bg-panel border border-line rounded-xl px-4 py-3 focus-within:border-accent transition">
                        <FiSearch className="text-subtext mr-3" />
                        <input
                            type="text"
                            placeholder="Search for questions, tags, users..."
                            className="bg-transparent outline-none w-full text-sm placeholder:text-subtext"
                        />
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div variants={item} className="mt-8 flex items-center justify-center gap-4">

                    <Link
                        to="/ask"
                        className="bg-accent hover:bg-accentHover px-6 py-3 rounded-xl font-medium transition"
                    >
                        Ask a Question
                    </Link>

                    <Link
                        to="/tags"
                        className="bg-soft hover:bg-panel px-6 py-3 rounded-xl font-medium transition"
                    >
                        Browse Tags
                    </Link>
                </motion.div>

            </motion.div>
        </section>
    );
};
