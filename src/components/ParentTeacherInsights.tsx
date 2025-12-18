import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function ParentTeacherInsights() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <Card className="max-w-xl mx-auto mt-10">
        <CardHeader>
          <CardTitle>📨 Insight Sent Successfully</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Badge variant="success">Email Sent to Parent</Badge>
          <p className="text-sm text-muted-foreground">
            The parent has received the teacher’s insight via email.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-xl mx-auto mt-10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="w-5 h-5" />
          Teacher → Parent Insight
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Parent Email Address" />
        <Textarea
          placeholder="Write insight about the student’s progress, strengths, or areas of improvement..."
          rows={5}
        />
        <Button onClick={() => setSent(true)} className="w-full">
          Send Insight
        </Button>
      </CardContent>
    </Card>
  );
}
