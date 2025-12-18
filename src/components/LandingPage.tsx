import {
  TrendingUp,
  Users,
  Brain,
  Award,
  BookOpen,
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

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/favicon.png"
              alt="EduTwin Logo"
              className="w-10 h-10 rounded-xl"
            />
            <span className="text-xl font-bold">EduTwin</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-pulse-slow" />

        <div className="container mx-auto text-center relative z-10">
          <Badge variant="outline" className="mb-6 px-4 py-2">
            <Star className="w-3 h-3 mr-2 text-primary" />
            Student Digital Twin Platform
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Watch Every Student
            <br />
            <span className="bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent">
              Grow & Shine
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            A digital twin platform that tracks a student’s journey from Grade 1
            to Grade 10, gamifies learning with quizzes and badges, and delivers
            clear insights for teachers and parents.
          </p>

          <div className="flex justify-center">
            <Button
              variant="hero"
              size="xl"
              onClick={() => navigate("/dashboard")}
            >
              Explore the Demo
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="accent" className="mb-4">
              Features
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Everything Schools{" "}
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                Need
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Tools to track, engage, and nurture every student’s potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} variant="elevated" className="p-6">
                <CardContent className="p-0">
                  <div
                    className={`w-14 h-14 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-4`}
                  >
                    <feature.icon
                      className={`w-7 h-7 ${feature.color}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/favicon.png"
              alt="EduTwin Logo"
              className="w-8 h-8 rounded-lg"
            />
            <span className="font-semibold">EduTwin</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 EduTwin. Empowering student growth through digital learning. A digital twin platform for student learning.
          </p>
        </div>
      </footer>
    </div>
  );
}
