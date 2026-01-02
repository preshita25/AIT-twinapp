import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AIChallenge from "./pages/AIChallenge";
import DailyChallenge from "./pages/DailyChallenge";
import ParentInsight from "./pages/ParentInsight";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>

            {/* PUBLIC */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />

            {/* DASHBOARD */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* AI CHALLENGE */}
            <Route
              path="/dashboard/challenge"
              element={
                <ProtectedRoute>
                  <AIChallenge />
                </ProtectedRoute>
              }
            />

            {/* DAILY CHALLENGE (OPTIONAL) */}
            <Route
              path="/dashboard/daily-challenge"
              element={
                <ProtectedRoute>
                  <DailyChallenge />
                </ProtectedRoute>
              }
            />

            {/* PARENT INSIGHT */}
            <Route
              path="/dashboard/parent-insight"
              element={
                <ProtectedRoute>
                  <ParentInsight />
                </ProtectedRoute>
              }
            />

            {/* FALLBACK */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}
