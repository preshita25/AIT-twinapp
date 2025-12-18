import { useState } from "react";
import { 
  Sparkles, Award, Flame, BookOpen, Trophy, Star, 
  TrendingUp, Brain, Target, Users, ChevronRight,
  Calendar, Zap, Medal, Lightbulb, Palette, Code,
  Music, Activity, BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { SkillRadar } from "@/components/SkillRadar";
import { ProgressTimeline } from "@/components/ProgressTimeline";
import { useNavigate } from "react-router-dom";

const studentData = {
  name: "Arjun Sharma",
  grade: "Grade 8",
  level: "Gold",
  xp: 12450,
  nextLevelXp: 15000,
  streak: 14,
  badges: 23,
  rank: 5,
  avatar: "🧑‍🎓",
};

const recentAchievements = [
  { icon: Medal, title: "Math Wizard", description: "Completed 50 math challenges", color: "text-primary", date: "2 days ago" },
  { icon: Lightbulb, title: "Quick Learner", description: "Solved 10 problems in under 5 mins", color: "text-secondary", date: "5 days ago" },
  { icon: Flame, title: "2 Week Streak", description: "14 days of continuous learning", color: "text-accent", date: "Today" },
];

const weeklyProgress = [
  { subject: "Mathematics", progress: 85, color: "primary" as const },
  { subject: "Science", progress: 72, color: "accent" as const },
  { subject: "English", progress: 90, color: "secondary" as const },
  { subject: "Social Studies", progress: 65, color: "gold" as const },
];

const recommendedActivities = [
  { icon: Code, title: "Coding Club", match: "95%", category: "STEM" },
  { icon: Palette, title: "Art Workshop", match: "78%", category: "Creative" },
  { icon: Music, title: "Music Class", match: "65%", category: "Arts" },
];

const talentPrediction = {
  primary: "STEM",
  secondary: "Creative Arts",
  traits: ["Analytical Thinking", "Pattern Recognition", "Spatial Reasoning"],
};

export function StudentDashboard() {
  const progressPercent = (studentData.xp / studentData.nextLevelXp) * 100;
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">EduTwin</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full">
              <Flame className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">{studentData.streak} day streak</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xl">
              {studentData.avatar}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Profile Card */}
        <Card variant="gradient" className="mb-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <CardContent className="p-6 md:p-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center text-4xl shadow-card">
                  {studentData.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl md:text-3xl font-bold">{studentData.name}</h1>
                    <Badge variant="gold">{studentData.level}</Badge>
                  </div>
                  <p className="text-muted-foreground">{studentData.grade}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1 text-sm">
                      <Trophy className="w-4 h-4 text-primary" />
                      <span>Rank #{studentData.rank}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Award className="w-4 h-4 text-secondary" />
                      <span>{studentData.badges} Badges</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0 w-full md:w-64">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Level Progress</span>
                  <span className="text-sm text-muted-foreground">{studentData.xp.toLocaleString()} / {studentData.nextLevelXp.toLocaleString()} XP</span>
                </div>
                <Progress value={progressPercent} variant="primary" indicatorVariant="gold" className="h-4" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Timeline */}
            <Card variant="default">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Grade 1–10 Learning Timeline
                </CardTitle>

                <Button variant="ghost" size="sm">
                  View Full Timeline
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  A static overview of the student’s academic progress and milestones from Grade 1 to Grade 10.
                </p>
                <ProgressTimeline />
              </CardContent>  
            </Card>

            {/* Weekly Progress */}
            <Card variant="default">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-secondary" />
                  This Week's Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {weeklyProgress.map((subject, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{subject.subject}</span>
                      <span className="text-sm text-muted-foreground">{subject.progress}%</span>
                    </div>
                    <Progress value={subject.progress} indicatorVariant={subject.color} />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card variant="default">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAchievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                      <div className={`w-12 h-12 rounded-xl bg-card flex items-center justify-center ${achievement.color}`}>
                        <achievement.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{achievement.date}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skill Radar */}
            <Card variant="default">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  Skill Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <SkillRadar />
              </CardContent>
            </Card>

            {/* Talent Prediction */}
            <Card variant="primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Talent Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Best Fit</p>
                    <Badge variant="default" className="text-base px-4 py-1">{talentPrediction.primary}</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Secondary Strength</p>
                    <Badge variant="accent">{talentPrediction.secondary}</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Key Traits</p>
                    <div className="flex flex-wrap gap-2">
                      {talentPrediction.traits.map((trait, index) => (
                        <Badge key={index} variant="outline" className="text-xs">{trait}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Activities */}
            <Card variant="default">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-secondary" />
                  Recommended for You
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recommendedActivities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
                      <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center">
                        <activity.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{activity.title}</h4>
                        <p className="text-xs text-muted-foreground">{activity.category}</p>
                      </div>
                      <Badge variant="success">{activity.match} match</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card variant="elevated">
              <CardContent className="p-4">
                <Button
                  variant="hero"
                  className="w-full mb-3"
                  onClick={() => navigate("/quiz")}
              >
                <BookOpen className="w-5 h-5" />
                Start Daily Challenge
              </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => navigate("/insights")}
                >
                  <Users className="w-5 h-5" />
                  Send Parent Insight
                </Button>

              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
