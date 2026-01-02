import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { generateQuiz, Question } from "@/lib/generateQuiz";

export default function AIChallenge() {
  const [quiz, setQuiz] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [xp, setXp] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [time, setTime] = useState(30);
  const [finished, setFinished] = useState(false);

  // Start quiz
  const startQuiz = () => {
    const q = generateQuiz(0);
    setQuiz(q);
    setIndex(0);
    setXp(0);
    setCorrect(0);
    setFinished(false);
    setTime(30);
  };

  // Timer
  useEffect(() => {
    if (finished || quiz.length === 0) return;

    if (time === 0) {
      nextQuestion(false);
      return;
    }

    const t = setTimeout(() => setTime((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [time, finished]);

  const nextQuestion = (isCorrect: boolean) => {
    if (isCorrect) {
      setXp((x) => x + 100);
      setCorrect((c) => c + 1);
    } else {
      setXp((x) => x + 20);
    }

    if (index === quiz.length - 1) {
      setFinished(true);
    } else {
      const newIndex = index + 1;
      setIndex(newIndex);
      setTime(30);
      setSelected(null);

      // Adaptive difficulty refresh at Q3
      if (newIndex === 3) {
        setQuiz(generateQuiz(correct + (isCorrect ? 1 : 0)));
      }
    }
  };

  if (quiz.length === 0) {
    return (
      <div className="p-10 text-center space-y-4">
        <h1 className="text-2xl font-bold">AI Challenge 🤖</h1>
        <Button onClick={startQuiz}>Start Challenge</Button>
      </div>
    );
  }

  if (finished) {
    const accuracy = Math.round((correct / quiz.length) * 100);
    const badge =
      accuracy >= 80 ? "🏆 Gold" : accuracy >= 50 ? "🥈 Silver" : "🥉 Bronze";

    return (
      <div className="p-10 max-w-md mx-auto space-y-4 text-center">
        <h2 className="text-2xl font-bold">Result</h2>
        <p>Score: {correct} / {quiz.length}</p>
        <p>Accuracy: {accuracy}%</p>
        <p>XP Earned: {xp}</p>
        <p className="text-xl font-semibold">{badge}</p>

        <Button onClick={startQuiz}>Retry</Button>
      </div>
    );
  }

  const q = quiz[index];

  return (
    <div className="p-8 max-w-xl mx-auto space-y-4">
      <div className="flex justify-between text-sm">
        <span>XP: {xp}</span>
        <span className={time <= 5 ? "text-red-500 font-bold" : ""}>
          ⏱ {time}s
        </span>
      </div>

      <Progress value={((index + 1) / quiz.length) * 100} />

      <h3 className="text-lg font-semibold">
        Q{index + 1}. {q.question}
      </h3>

      {q.options.map((opt) => (
        <Button
          key={opt}
          variant={selected === opt ? "secondary" : "outline"}
          className="w-full"
          disabled={!!selected}
          onClick={() => {
            setSelected(opt);
            setTimeout(() => nextQuestion(opt === q.answer), 600);
          }}
        >
          {opt}
        </Button>
      ))}
    </div>
  );
}
