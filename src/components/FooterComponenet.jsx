import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <footer className="footer-lumiere">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-monogram">
            <Typography
              variant="h2"
              sx={{ fontFamily: "Cormorant Garamond", fontSize: 90, lineHeight: 1 }}
            >
              L
            </Typography>
          </div>
          <div className="footer-brand">
            <Typography variant="h5" component="h2" className="footer-title">
              Lumiere
            </Typography>
            <Typography variant="body2" className="footer-subtitle">
              Cinema Studio
            </Typography>
            <Typography variant="body2" className="footer-description">
              A private salon for those who believe a film deserves to be
              remembered.
            </Typography>
          </div>
        </div>

        <div className="footer-right">
          <Typography variant="overline" className="footer-label">
            Explore
          </Typography>
          <div className="footer-nav-links">
            <div className="footer-nav" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link to="/">Home</Link>
              <Link to="/favorites">Favorites</Link>
            </div>
            <div className="footer-nav" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link to="/movies/add">Add Movie</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-text">
        <Typography variant="caption" display="block">
          © 2026 Lumiere Cinema Studio. All rights reserved.
        </Typography>
        <Typography variant="caption" component="span" sx={{ fontStyle: "italic" }}>
          Made for movie lovers.
        </Typography>
      </div>
    </footer>
  );
};

export default FooterComponent;
