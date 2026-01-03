import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "@/components/ui/button";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={() => handleSubmit()}

        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "2rem",
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          Login to EduTwin
        </h1>

        <input
          type="email"
          placeholder="Email"
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "1.5rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <Button type="submit" className="w-full">
          Continue
        </Button>
      </form>
    </div>
  );
}
