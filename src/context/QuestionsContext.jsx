import { createContext, useContext, useState } from "react";
import { questionsStore } from "../data/questionStore";

const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
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
                                content: String(answerText), // ✅ FORCE STRING
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

    const addQuestion = (newQuestion) => {
        setQuestions(prev => [
            {
                id: Date.now(),
                votes: 0,
                answers: [],
                time: "just now",
                ...newQuestion
            },
            ...prev // newest on top
        ]);
    };

    return (
        <QuestionsContext.Provider value={{ questions, getQuestionById, addAnswer, addQuestion }}>
            {children}
        </QuestionsContext.Provider>
    );
};

export const useQuestions = () => useContext(QuestionsContext);