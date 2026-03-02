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
              `flex items-center gap-1 text-subtext hover:text-text transition ${isActive ? "text-accent" : ""
              }`
            }
          >
            <FiPlus className="text-base" />
            Ask
          </NavLink>

          <FiBell className="text-lg text-subtext hover:text-text cursor-pointer transition" />

          <Link to="/profile">
            <div className="relative w-9 h-9 rounded-full bg-accent/10 border border-line flex items-center justify-center cursor-pointer transition hover:border-accent hover:shadow-md group">

              {/* Icon */}
              <FiUser className="text-subtext group-hover:text-accent transition text-sm" />

              {/* Online dot (optional premium touch) */}
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border border-panel rounded-full"></span>

            </div>
          </Link>

        </div>
      </div>
    </header>
  );
};
