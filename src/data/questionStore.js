export const questionsStore = [
  {
    id: 1,
    title: "How to center a div in CSS?",
    description: "I tried flexbox and margin auto but it still doesn't work...",
    tags: ["css", "html"],
    votes: 12,
    time: "2 hours ago",
    answers: [
      {
        id: 1,
        content: "Use flexbox:\ndisplay:flex; justify-content:center;",
        votes: 5,
        time: "2 hours ago"
      },
      {
        id: 2,
        content: "Use grid:\ndisplay:grid; place-items:center;",
        votes: 3,
        time: "5 hours ago"
      }
    ]
  }
];