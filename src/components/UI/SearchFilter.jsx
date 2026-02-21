export const SearchFilter = ({ search, setSearch, sortOrder, setSortOrder }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">

      {/* Search */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tags..."
        className="w-full md:w-80 bg-panel border border-line rounded-xl px-4 py-3 outline-none focus:border-accent transition"
      />

      {/* Sort Dropdown */}
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="bg-panel border border-line px-4 py-3 rounded-xl text-sm outline-none focus:border-accent transition"
      >
        <option value="asc">Ascending (A-Z)</option>
        <option value="desc">Descending (Z-A)</option>
      </select>

    </div>
  );
};