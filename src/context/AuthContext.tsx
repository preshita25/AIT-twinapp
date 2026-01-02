import { createContext, useContext, useState } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;

  // 🔥 NEW
  xp: number;
  addXP: (amount: number) => void;
  streak: number;
  incrementStreak: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    localStorage.getItem("auth") === "true"
  );

  // 🔥 XP STATE
  const [xp, setXp] = useState<number>(
    Number(localStorage.getItem("xp")) || 12450
  );

  // 🔥 STREAK STATE
  const [streak, setStreak] = useState<number>(
    Number(localStorage.getItem("streak")) || 14
  );

  const login = () => {
    localStorage.setItem("auth", "true");
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
  };

  // 🔥 ADD XP
  const addXP = (amount: number) => {
    const newXP = xp + amount;
    setXp(newXP);
    localStorage.setItem("xp", String(newXP));
  };

  // 🔥 INCREMENT STREAK
  const incrementStreak = () => {
    const newStreak = streak + 1;
    setStreak(newStreak);
    localStorage.setItem("streak", String(newStreak));
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        xp,
        addXP,
        streak,
        incrementStreak,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
};
