export type Question = {
  question: string;
  options: string[];
  answer: string;
  difficulty: "easy" | "hard";
};

const easy: Question[] = [
  {
    question: "What is the value of 3² + 4²?",
    options: ["25", "49", "12", "18"],
    answer: "25",
    difficulty: "easy",
  },
  {
    question: "Which gas is released during photosynthesis?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    answer: "Oxygen",
    difficulty: "easy",
  },
  {
    question: "If x + 7 = 15, what is x?",
    options: ["6", "7", "8", "9"],
    answer: "8",
    difficulty: "easy",
  },
];

const hard: Question[] = [
  {
    question: "Solve: (2x − 3) = 11",
    options: ["4", "5", "6", "7"],
    answer: "7",
    difficulty: "hard",
  },
  {
    question: "Which law explains action and reaction?",
    options: ["Newton 1st", "Newton 2nd", "Newton 3rd", "Kepler"],
    answer: "Newton 3rd",
    difficulty: "hard",
  },
];

export function generateQuiz(correctSoFar: number): Question[] {
  const base = [...easy];

  // Adaptive difficulty
  if (correctSoFar >= 2) {
    base.push(...hard);
  } else {
    base.push(easy[0], easy[1]);
  }

  return base.slice(0, 5);
}
