import {
  TrendingUp,
  Users,
  Brain,
  Award,
  ChevronRight,
  Star,
  Zap,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Brain,
    title: "Student Digital Twin",
    description:
      "A unified digital profile that tracks a student’s academic progress, skills, and learning patterns over time",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Zap,
    title: "AI Learning Paths",
    description:
      "Personalized quizzes with adaptive difficulty that grows with each student",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Target,
    title: "Talent Prediction",
    description:
      "Predicts STEM, Arts, Sports aptitude based on learning patterns",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: TrendingUp,
    title: "Progress Timeline",
    description: "Clear visualization of Grade 1 to Grade 10 progression",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Award,
    title: "Gamified Learning",
    description:
      "Streaks, levels, badges & weekly challenges to keep students engaged",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Users,
    title: "Parent & Teacher Insights",
    description:
      "Automated reports on strengths, weaknesses & learning patterns",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const stats = [
  { value: "1–10", label: "Grade Progression" },
  { value: "Quizzes", label: "Gamified Learning" },
  { value: "Badges", label: "Skill Recognition" },
  { value: "Insights", label: "Teacher & Parent Reports" },
];

export function LandingPage() {
  const navigate = useNavigate();

  const goToLogin = () => navigate("/login");

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/favicon.png" alt="EduTwin" className="w-10 h-10 rounded-xl" />
            <span className="text-xl font-bold">EduTwin</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground">
              How it Works
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={goToLogin}>
              Log in
            </Button>
            <Button variant="hero" size="sm" onClick={goToLogin}>
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center">
        <Badge variant="outline" className="mb-6 px-4 py-2">
          <Star className="w-3 h-3 mr-2 text-primary" />
          Student Digital Twin Platform
        </Badge>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Watch Every Student <br />
          <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            Grow & Shine
          </span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          A digital twin platform that tracks a student’s journey from Grade 1 to Grade 10.
        </p>

        <Button variant="hero" size="xl" onClick={goToLogin}>
          Explore the Demo
          <ChevronRight className="w-5 h-5" />
        </Button>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Card key={i} className="p-6">
              <CardContent className="p-0">
                <div className={`w-14 h-14 rounded-2xl ${f.bgColor} flex items-center justify-center mb-4`}>
                  <f.icon className={`w-7 h-7 ${f.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground">{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
