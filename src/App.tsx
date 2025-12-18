import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizGame } from "./components/QuizGame";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

import Index from "./pages/Index";
import { LandingPage } from "./components/LandingPage";
import { StudentDashboard } from "./components/StudentDashboard";
import { ParentTeacherInsights } from "./components/ParentTeacherInsights";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route
              path="/dashboard"
              element={
                // <ProtectedRoute>
                  <StudentDashboard />
                // </ProtectedRoute>
              }
           />
            <Route path="/quiz" element={<QuizGame />} />
            <Route path="/insights" element={<ParentTeacherInsights />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}
