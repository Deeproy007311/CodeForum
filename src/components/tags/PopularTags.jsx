import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { tagsData } from "../../data/tagsData";
import { TagCard } from "./TagCard";

export const PopularTags = () => {
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
    <section className="max-w-6xl mx-auto px-4 py-24">

      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Popular Topics
        </h2>
        <p className="text-subtext mt-3">
          Explore discussions by technologies developers love
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {loading ? (
          <p className="text-subtext col-span-full text-center">
            Loading topics...
          </p>
        ) : (
          tags.slice(0, 4).map((tag) => (
            <TagCard key={tag.id} tag={tag} />
          ))
        )}

      </div>

      {/* View All Button */}
      {!loading && (
        <div className="mt-14 text-center">
          <Link
            to="/tags"
            className="inline-flex items-center gap-2 bg-panel border border-line px-6 py-3 rounded-xl hover:border-accent hover:text-accent transition"
          >
            View All Tags →
          </Link>
        </div>
      )}

    </section>
  );

};
