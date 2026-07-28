import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      navigate("/");
    } catch {
      setError("Login failed. Please check your credentials.");
    }

    setLoading(false);
  };

  return (
    <section className="auth-section">
      <div className="container auth-container">
        <h2>Welcome Back</h2>
        <p>Log in to continue your AI journey.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="auth-error">{error}</p>}
          <button type="submit" className="btn-primary">
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
