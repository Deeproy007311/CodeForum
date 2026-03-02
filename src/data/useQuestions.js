import { useState } from "react";
import { questionsStore } from "./questionStore";

export const useQuestions = () => {
  const [questions, setQuestions] = useState(questionsStore);

  const getQuestionById = (id) => {
    return questions.find(q => q.id === Number(id));
  };

  const addAnswer = (questionId, answerText) => {
    setQuestions(prev =>
      prev.map(q => {
        if (q.id === Number(questionId)) {
          return {
            ...q,
            answers: [
              ...q.answers,
              {
                id: Date.now(),
                content: answerText,
                votes: 0,
                time: "just now"
              }
            ]
          };
        }
        return q;
      })
    );
  };

  return {
    questions,
    getQuestionById,
    addAnswer
  };
};