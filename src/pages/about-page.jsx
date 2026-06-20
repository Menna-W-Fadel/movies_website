import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">

      <section className="about-hero">
        <div className="about-overlay"></div>

        <div className="about-hero-content">
          <p className="label">Our Story</p>
          <h1 className="heading-hero">Cinema, Curated.</h1>
          <p className="about-subtitle">
            A refined space for discovering, managing, and experiencing films with intention.
          </p>
        </div>
      </section>

      <section className="about-content">

        <div className="about-block">
          <h2 className="heading-section">What is Lumière?</h2>
          <div className="divider-emerald"></div>

          <p className="text-muted mt-3">
            Lumière is a cinematic platform designed for film enthusiasts who value
            elegance, clarity, and control. It transforms the way you browse,
            manage, and experience movies — combining functionality with a refined visual identity.
          </p>
        </div>

        <div className="about-grid">

          <div className="glass about-card">
            <p className="label">Experience</p>
            <h3 className="card-title">Immersive Design</h3>
            <p className="text-muted">
              Obsidian surfaces, emerald accents, and cinematic layouts that elevate every interaction.
            </p>
          </div>

          <div className="glass about-card">
            <p className="label">Control</p>
            <h3 className="card-title">Full Movie Management</h3>
            <p className="text-muted">
              Add, edit, and organize your collection with precision and flexibility.
            </p>
          </div>

          <div className="glass about-card">
            <p className="label">Vision</p>
            <h3 className="card-title">Curated Experience</h3>
            <p className="text-muted">
              Not just data — a curated environment that respects film as an art form.
            </p>
          </div>

        </div>

      </section>
    </div>
  );
};

export default AboutPage;
