import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const quizQuestions = [
  {
    question: "What is 7 × 8?",
    options: ["54", "56", "64", "58"],
    answer: "56",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "What is the square root of 81?",
    options: ["7", "8", "9", "10"],
    answer: "9",
  },
];

export function QuizGame() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (option: string) => {
    if (option === quizQuestions[current].answer) {
      setScore(score + 10);
    }

    if (current + 1 < quizQuestions.length) {
      setCurrent(current + 1);
    } else {
      setCompleted(true);
    }
  };

  if (completed) {
    return (
      <Card className="max-w-xl mx-auto mt-10">
        <CardHeader>
          <CardTitle>🎉 Challenge Completed!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg font-semibold">Your Score: {score}</p>
          <Badge variant="success">+1 Knowledge Badge</Badge>
          <p className="text-sm text-muted-foreground">
            XP and badges will be added to your profile.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-xl mx-auto mt-10">
      <CardHeader>
        <CardTitle>Daily Quiz Challenge</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="font-medium">
          {quizQuestions[current].question}
        </p>

        <div className="grid grid-cols-2 gap-3">
          {quizQuestions[current].options.map((option) => (
            <Button
              key={option}
              variant="outline"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </Button>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          Question {current + 1} of {quizQuestions.length}
        </p>
      </CardContent>
    </Card>
  );
}
