import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

const login = (username, password) => {
  if (username === "admin" && password === "admin") {
    setUser({ username, role: "admin" });
  } else {
    throw new Error("Username atau password salah");
  }
};


  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth harus dipakai di AuthProvider");
  }
  return ctx;
}
