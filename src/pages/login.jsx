import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    try {
      login(username, password);
      navigate("/"); // 🔑 MASUK DASHBOARD
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-semibold text-center">
          Sistem Informasi Inventori
        </h1>

        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}

        <input
          placeholder="Username"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn-primary w-full">
          Login
        </button>
      </form>
    </div>
  );
}
