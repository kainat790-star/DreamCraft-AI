import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section className="auth-section">
      <div className="container auth-container">
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </section>
  );
}

export default PageNotFound;
