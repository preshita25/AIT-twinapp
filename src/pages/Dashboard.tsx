import { StudentDashboard } from "@/components/StudentDashboard";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // back to landing
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="flex justify-end p-4 border-b">
        <Button variant="ghost" onClick={handleLogout}>
  Logout
</Button>

      </div>

      {/* REAL dashboard UI */}
      <StudentDashboard />
    </div>
  );
}
