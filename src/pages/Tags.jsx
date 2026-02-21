import { useEffect, useState } from "react";
import { tagsData } from "../data/tagsData";
import { TagCard } from "../components/tags/TagCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Tags = () => {
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);

    // simulate API fetch
    useEffect(() => {
        const timer = setTimeout(() => {
            setTags(tagsData);
            setLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-16">

            {/* Header */}
            <div className="mb-14 text-center">
                <h1 className="text-4xl font-semibold tracking-tight">Tags</h1>
                <p className="text-subtext mt-3">
                    Browse questions by technology and discover topics developers are discussing
                </p>
            </div>

            {/* Search + Filters UI */}
            <SearchFilter />

            {/* Tags Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    loading ? (
                        <p className="text-subtext col-span-full text-center">
                            Loading topics...
                        </p>
                    ) : (
                        tags.map((tag) => (
                            <TagCard key={tag.id} tag={tag} />
                        ))
                    )
                }
            </div>

        </div>
    );
};
