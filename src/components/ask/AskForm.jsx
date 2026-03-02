import { useState } from "react";
import { tagsData } from "../../data/tagsData";
import toast from "react-hot-toast";
import { useQuestions } from "../../context/QuestionsContext";

export const AskForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);
    const [errors, setErrors] = useState({});
    const { addQuestion } = useQuestions();

    const handleTagToggle = (slug) => {
        if (selectedTags.includes(slug)) {
            setSelectedTags(selectedTags.filter(tag => tag !== slug));
        } else {
            if (selectedTags.length >= 5) {
                toast.error("You can select max 5 tags");
                return;
            }
            setSelectedTags([...selectedTags, slug]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!title.trim()) newErrors.title = "Title is required";
        if (!description.trim()) newErrors.description = "Description is required";
        if (selectedTags.length === 0) newErrors.tags = "Select at least one tag";

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        const newQuestion = {
            title,
            description,
            tags: selectedTags
        };

        // 🔥 ADD TO GLOBAL STORE
        addQuestion(newQuestion);

        // toast
        toast.success("Question posted successfully 🚀");

        // reset
        setTitle("");
        setDescription("");
        setSelectedTags([]);
        setErrors({});
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-panel border border-line rounded-2xl p-6 space-y-6"
        >

            {/* Title */}
            <div>
                <label className="block text-sm font-medium mb-2">
                    Title
                </label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. How to center a div in CSS?"
                    className={`w-full bg-panel text-textMain border rounded-xl px-4 py-3 outline-none transition placeholder:text-subtext
                    ${errors.title ? "border-red-500" : "border-line focus:border-accent"}`}
                />
                {errors.title && (
                    <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                )}
            </div>

            {/* Description */}
            <div>
                <label className="block text-sm font-medium mb-2">
                    Description
                </label>
                <textarea
                    rows="5"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Explain your problem clearly..."
                    className={`w-full bg-panel text-textMain border rounded-xl px-4 py-3 outline-none transition resize-none placeholder:text-subtext
                    ${errors.description ? "border-red-500" : "border-line focus:border-accent"}`}
                />
                {errors.description && (
                    <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                )}
            </div>

            {/* Tags */}
            <div>
                <label className="block text-sm font-medium mb-3">
                    Select Tags (max 5)
                </label>

                <div className="flex flex-wrap gap-2">
                    {tagsData.map((tag) => {
                        const isSelected = selectedTags.includes(tag.slug);

                        return (
                            <button
                                type="button"
                                key={tag.id}
                                onClick={() => handleTagToggle(tag.slug)}
                                className={`px-3 py-1 rounded-md text-sm transition
                                ${isSelected
                                        ? "bg-accent text-white"
                                        : "bg-soft text-subtext hover:bg-accent/20"
                                    }`}
                            >
                                {tag.name}
                            </button>
                        );
                    })}
                </div>

                {errors.tags && (
                    <p className="text-red-500 text-sm mt-2">{errors.tags}</p>
                )}

                {selectedTags.length > 0 && (
                    <div className="mt-3 text-xs text-subtext">
                        Selected: {selectedTags.join(", ")}
                    </div>
                )}
            </div>

            {/* Submit */}
            <div className="pt-4">
                <button
                    type="submit"
                    className="bg-accent hover:bg-accentHover px-6 py-3 rounded-xl font-medium transition"
                >
                    Post Question
                </button>
            </div>

        </form>
    );
};