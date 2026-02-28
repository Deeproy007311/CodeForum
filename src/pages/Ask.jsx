import { AskForm } from "../components/ask/AskForm";
import { TipsCard } from "../components/ask/TipsCard";


export const Ask = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-14">

      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">
          Ask a Question
        </h1>
        <p className="text-subtext mt-3 max-w-2xl mx-auto">
          Get help from the developer community. Be clear and provide enough details so others can understand your problem.
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left → Form */}
        <div className="lg:col-span-2">
          <AskForm />
        </div>

        {/* Right → Tips */}
        <div>
          <TipsCard />
        </div>

      </div>

    </div>
  );
};