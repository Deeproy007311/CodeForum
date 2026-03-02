import { useQuestions } from "../../context/QuestionsContext";
import { QuestionCard } from "../questions/QuestionCard";


export const ProfileQuestions = () => {
  const { questions } = useQuestions();

  return (
    <div className="space-y-4">
      {questions.map(q => (
        <QuestionCard key={q.id} question={q} />
      ))}
    </div>
  );
};