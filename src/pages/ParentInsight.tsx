import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

export default function ParentInsight() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(
    "Student Progress Report – EduTwin"
  );
  const [message, setMessage] = useState(
    `Hello Parent,

We are pleased to share your child’s recent learning insights.

📊 Academic Progress: Strong
🧠 Skill Growth: Logical & Creative
⚠️ Needs Attention: Science consistency

Your child is performing well overall and showing great improvement.
We recommend light revision in Science for better consistency.

Regards,
EduTwin AI`
  );

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!email || !message) return alert("Please fill all fields");

    setSending(true);

    // Simulated send (demo purpose)
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1500);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center">
        Parent Insight 📩
      </h1>

      {/* Insight Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Student Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Badge variant="secondary">📊 Academic Progress: Strong</Badge>
          <Badge variant="secondary">🧠 Skill Growth: Logical & Creative</Badge>
          <Badge variant="destructive">⚠️ Needs Attention: Science</Badge>
        </CardContent>
      </Card>

      {/* Email Box */}
      <Card>
        <CardHeader>
          <CardTitle>Send Report to Parent</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Parent Email (example@gmail.com)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            placeholder="Email Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <Textarea
            rows={8}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button
            className="w-full"
            onClick={handleSend}
            disabled={sending}
          >
            {sending
              ? "Sending Report..."
              : sent
              ? "✅ Report Sent"
              : "Send Report"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
