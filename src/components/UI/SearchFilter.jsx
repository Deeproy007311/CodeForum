export const SearchFilter = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">

            {/* Search input */}
            <input
                type="text"
                placeholder="Search tags..."
                className="w-full md:w-80 bg-panel border border-line rounded-xl px-4 py-3 outline-none focus:border-accent transition"
            />

            {/* Sort buttons */}
            <div className="flex gap-3">
                <button className="bg-panel border border-line px-4 py-2 rounded-lg text-sm hover:border-accent transition">
                    Popular
                </button>
                <button className="bg-panel border border-line px-4 py-2 rounded-lg text-sm hover:border-accent transition">
                    Name
                </button>
                <button className="bg-panel border border-line px-4 py-2 rounded-lg text-sm hover:border-accent transition">
                    New
                </button>
            </div>

        </div>
    )
}