import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setSuccess(true);
      setTimeout(() => navigate("/"), 1200);
    } catch {
      setSuccess(false);
    }
    setLoading(false);
  };

  return (
    <section className="auth-section">
      <div className="container auth-container">
        <h2>Complete Your Checkout</h2>
        <p>Confirm your plan and continue with DreamCraft AI.</p>

        <div className="checkout-summary glass-card">
          <p>Plan: Pro</p>
          <p>Price: $19/mo</p>
        </div>

        {success ? (
          <p className="auth-success">Purchase complete! Redirecting to home...</p>
        ) : (
          <button
            type="button"
            className="btn-primary"
            onClick={handleCheckout}
            disabled={loading}
          >
            {loading ? "Processing..." : "Confirm Purchase"}
          </button>
        )}
      </div>
    </section>
  );
}

export default CheckoutPage;
