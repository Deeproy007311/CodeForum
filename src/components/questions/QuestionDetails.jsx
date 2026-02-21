import { useParams } from "react-router-dom";

export const QuestionDetails = () => {
  const { id } = useParams();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-semibold">Question ID: {id}</h1>
      <p className="text-subtext mt-2">
        Full question details page will be here
      </p>
    </div>
  );
};
