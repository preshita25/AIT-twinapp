import { useState } from "react";
import { Button } from "@/components/ui/button";

const QUESTIONS = [
  {
    q: "What is 12 × 8?",
    options: ["96", "88", "108", "84"],
    answer: "96",
  },
  {
    q: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
];

export default function DailyChallenge() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const current = QUESTIONS[step];

  const handleAnswer = (opt: string) => {
    if (opt === current.answer) setScore(score + 10);
    setStep(step + 1);
  };

  if (step >= QUESTIONS.length) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Challenge Complete 🎉</h1>
        <p className="mb-6">You earned {score} XP</p>
        <Button onClick={() => window.history.back()}>
          Back to Dashboard
        </Button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-6">
        {current.q}
      </h2>

      <div className="grid gap-4">
        {current.options.map((opt) => (
          <Button
            key={opt}
            variant="outline"
            onClick={() => handleAnswer(opt)}
          >
            {opt}
          </Button>
        ))}
      </div>
    </div>
  );
}
