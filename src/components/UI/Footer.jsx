import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="bg-surface border-t border-borderColor mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-lg font-semibold mb-3">CodeForum</h2>
            <p className="text-textMuted text-sm leading-relaxed">
              A place where developers ask questions, share knowledge,
              and grow together. Built for learning and collaboration.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-medium mb-3">Navigation</h3>
            <div className="flex flex-col gap-2 text-sm text-textMuted">
              <Link to="/" className="hover:text-textMain transition">Home</Link>
              <Link to="/tags" className="hover:text-textMain transition">Tags</Link>
              <Link to="/ask" className="hover:text-textMain transition">Ask Question</Link>
              <Link to="/profile" className="hover:text-textMain transition">Profile</Link>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-medium mb-3">Connect</h3>
            <div className="flex gap-4 text-xl text-textMuted">
              <a href="#" className="hover:text-textMain transition"><FiGithub /></a>
              <a href="#" className="hover:text-textMain transition"><FiLinkedin /></a>
              <a href="#" className="hover:text-textMain transition"><FiTwitter /></a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-borderColor mt-8 pt-6 text-center text-sm text-textMuted">
          © {new Date().getFullYear()} CodeForum — Built with React & Tailwind
        </div>

      </div>
    </footer>
  );
};

