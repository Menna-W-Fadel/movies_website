import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="notfound-page">
      <div className="notfound-bg-glow"></div>
      <div className="notfound-deco notfound-deco-1"></div>
      <div className="notfound-deco notfound-deco-2"></div>
      <div className="notfound-deco notfound-deco-3"></div>

      <div className="notfound-content">
        <div className="notfound-label">Error</div>
        <div className="notfound-code">404</div>
        <div className="notfound-divider"></div>
        <h1 className="notfound-title">Page Not Found</h1>
        <p className="notfound-desc">
          The reel you're looking for has ended or never existed.
          Let's get you back to the screening room.
        </p>
        <Link to="/" className="notfound-home-link">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
