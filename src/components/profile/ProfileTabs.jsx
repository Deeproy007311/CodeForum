export const ProfileTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-3 mb-8">

      {["questions", "answers"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-5 py-2 rounded-xl text-sm font-medium transition
          ${
            activeTab === tab
              ? "bg-accent text-white shadow-md"
              : "bg-soft text-subtext hover:text-text"
          }`}
        >
          {tab}
        </button>
      ))}

    </div>
  );
};