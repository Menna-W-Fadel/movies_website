import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom"; 
import { useSelector } from "react-redux";

const NavBar = ({ user }) => {
  const isAuthenticated = !!user;
  const [scrolled, setScrolled] = useState(false);
  const favorites = useSelector((s) => s.favorites.items);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`custom-navbar navbar navbar-expand-lg fixed-top w-100 ${
          scrolled ? "glass-strong shadow-card" : "bg-transparent"
        }`}
        style={{ zIndex: 50, padding: "16px 24px" }}
      >
        <div className="container-fluid">
          <Link className="nav-logo navbar-brand heading-section" to="/">
            Lumière
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            style={{ filter: 'invert(1)' }} 
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav me-auto">
             
              <NavLink className="nav-link px-4" to="/" end>
                Home
              </NavLink>
              
              <NavLink className="nav-link px-4 d-flex align-items-center" to="/favorites">
                Favorites
                {favorites.length > 0 && (
                  <span className="favorites-badge">{favorites.length}</span>
                )}
              </NavLink>

              <NavLink className="nav-link px-4" to="/movies/add">
                Add Movie
              </NavLink>

              <NavLink className="nav-link px-4" to="/about">
                About
              </NavLink>

              <NavLink className="nav-link px-4" to="/contact">
                Contact
              </NavLink>
            </div>

            <div className="d-flex align-items-center gap-2">
              {!isAuthenticated ? (
                <>
                  <NavLink className="nav-link px-4" to="/login">
                    SIGN IN
                  </NavLink>
                  <Link className="btn-primary d-flex align-items-center" to="/register">
                    RESERVE SEAT
                  </Link>
                </>
              ) : (
                <div className="d-flex align-items-center gap-3">
                  <span className="text-white-50 small">{user.name}</span>
                  <button className="btn-glass destructive">Logout</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div style={{ height: "80px" }}></div>
    </>
  );
};

export default NavBar;