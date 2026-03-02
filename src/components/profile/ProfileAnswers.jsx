import { useQuestions } from "../../context/QuestionsContext";


export const ProfileAnswers = () => {
  const { questions } = useQuestions();

  const allAnswers = questions.flatMap(q =>
    q.answers.map(a => ({
      ...a,
      questionTitle: q.title
    }))
  );

  return (
    <div className="space-y-4">

      {allAnswers.map(a => (
        <div
          key={a.id}
          className="bg-panel border border-line rounded-xl p-5"
        >
          <p className="text-sm">{a.content}</p>

          <div className="text-xs text-subtext mt-3">
            On: {a.questionTitle}
          </div>
        </div>
      ))}

    </div>
  );
};