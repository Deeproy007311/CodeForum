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
    const voteQuestion = (id, type) => {
        setQuestions(prev =>
            prev.map(q => {
                if (q.id === Number(id)) {
                    return {
                        ...q,
                        votes: type === "up" ? q.votes + 1 : q.votes - 1
                    };
                }
                return q;
            })
        );
    };

    const voteAnswer = (questionId, answerId, type) => {
        setQuestions(prev =>
            prev.map(q => {
                if (q.id === Number(questionId)) {
                    return {
                        ...q,
                        answers: q.answers.map(a => {
                            if (a.id === answerId) {
                                return {
                                    ...a,
                                    votes: type === "up" ? a.votes + 1 : a.votes - 1
                                };
                            }
                            return a;
                        })
                    };
                }
                return q;
            })
        );
    };

    return (
        <QuestionsContext.Provider value={{ questions, getQuestionById, addAnswer, addQuestion, voteQuestion, voteAnswer }}>
            {children}
        </QuestionsContext.Provider>
    );
};

export const useQuestions = () => useContext(QuestionsContext);