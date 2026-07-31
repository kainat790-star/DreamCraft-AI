import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [name, setName] = useState("");
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
      navigate("/login");
    } catch {
      setError("Unable to sign up. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="auth-section">
      <div className="container auth-container">
        <h2>Create Your Account</h2>
        <p>Sign up to access premium AI roadmap features.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default SignupPage;
