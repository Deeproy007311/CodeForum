import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiBell, FiUser, FiPlus } from "react-icons/fi";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-panel/70 border-b border-line">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-6">

        {/* Logo */}
        <Link to="/" className="text-lg font-semibold tracking-tight">
          <span className="text-text">Code</span>
          <span className="text-accent">Forum</span>
        </Link>

        {/* Search */}
        <div className="flex-1 hidden md:flex justify-center">
          <div className="w-full max-w-md flex items-center gap-2 bg-bg border border-line rounded-lg px-3 py-2 focus-within:border-accent transition">
            <FiSearch className="text-subtext" />
            <input
              type="text"
              placeholder="Search questions..."
              className="bg-transparent outline-none text-sm w-full placeholder:text-subtext"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5 text-sm">

          {/* Ask Question (link style) */}
          <NavLink
            to="/ask"
            className={({ isActive }) =>
              `flex items-center gap-1 text-subtext hover:text-text transition ${
                isActive ? "text-accent" : ""
              }`
            }
          >
            <FiPlus className="text-base" />
            Ask
          </NavLink>

          <FiBell className="text-lg text-subtext hover:text-text cursor-pointer transition" />

          <div className="w-8 h-8 rounded-full border border-line flex items-center justify-center hover:border-accent transition cursor-pointer">
            <FiUser className="text-subtext" />
          </div>

        </div>
      </div>
    </header>
  );
};
