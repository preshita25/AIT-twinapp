import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "@/components/ui/button";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("LOGIN CLICKED"); // YOU WILL SEE THIS
    login();
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <h1>Login to EduTwin</h1>

      {/* IMPORTANT: type="button" */}
      <Button
        type="button"
        onClick={handleLogin}
        className="px-8 py-5 text-lg"
      >
        Login
      </Button>
    </div>
  );
}
