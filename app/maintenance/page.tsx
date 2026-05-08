export default function MaintenancePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Open+Sans:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Open Sans', sans-serif;
          background: #faf7f5;
          overflow-x: hidden;
        }

        .maintenance-root {
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        /* ── Blobs décoratifs ── */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
          animation: float 8s ease-in-out infinite;
          pointer-events: none;
        }
        .blob-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, #8a4eb0, #5a2a7a);
          top: -150px; right: -100px;
          animation-delay: 0s;
        }
        .blob-2 {
          width: 350px; height: 350px;
          background: radial-gradient(circle, #e8662b, #f47a3d);
          bottom: -80px; left: -80px;
          animation-delay: -3s;
        }
        .blob-3 {
          width: 200px; height: 200px;
          background: radial-gradient(circle, #c0a0d5, #8a4eb0);
          top: 50%; left: 10%;
          animation-delay: -5s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-30px) scale(1.05); }
        }

        /* ── Grain overlay ── */
        .maintenance-root::after {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.12;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
          background-size: 240px 240px;
          z-index: 0;
        }

        /* ── Card principale ── */
        .card {
          position: relative;
          z-index: 10;
          max-width: 680px;
          width: 100%;
          background: rgba(255, 255, 255, 0.82);
          backdrop-filter: blur(24px) saturate(1.8);
          -webkit-backdrop-filter: blur(24px) saturate(1.8);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 28px;
          padding: 3.5rem 3rem;
          box-shadow:
            0 2px 0 rgba(255,255,255,0.6) inset,
            0 40px 80px -20px rgba(90, 42, 122, 0.15),
            0 8px 24px -4px rgba(0,0,0,0.08);
          text-align: center;
          animation: fadeUp 0.8s ease both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Logo / icône ── */
        .icon-ring {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px; height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #5a2a7a 0%, #8a4eb0 100%);
          box-shadow: 0 8px 24px rgba(90, 42, 122, 0.35);
          margin-bottom: 1.75rem;
          animation: pulse-ring 3s ease-in-out infinite;
        }

        @keyframes pulse-ring {
          0%, 100% { box-shadow: 0 8px 24px rgba(90, 42, 122, 0.35); }
          50%       { box-shadow: 0 8px 40px rgba(90, 42, 122, 0.55); }
        }

        .icon-ring svg {
          width: 40px; height: 40px;
          fill: none;
          stroke: white;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        /* ── Eyebrow ── */
        .eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 11px;
          color: #e8662b;
          margin-bottom: 0.75rem;
          display: block;
        }

        /* ── Titre ── */
        .title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: clamp(1.8rem, 5vw, 2.6rem);
          line-height: 1.1;
          color: #3a1854;
          margin-bottom: 1.25rem;
          letter-spacing: -0.02em;
        }

        .title em {
          font-style: normal;
          background: linear-gradient(90deg, #5a2a7a, #e8662b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Description ── */
        .description {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #6b6470;
          max-width: 480px;
          margin: 0 auto 2.5rem;
        }

        /* ── Barre de progression animée ── */
        .progress-wrap {
          background: #f3eef2;
          border-radius: 100px;
          height: 8px;
          overflow: hidden;
          margin-bottom: 0.75rem;
        }

        .progress-bar {
          height: 100%;
          border-radius: 100px;
          background: linear-gradient(90deg, #5a2a7a, #8a4eb0, #e8662b);
          background-size: 200% 100%;
          animation: shimmer 2.5s ease-in-out infinite, grow 1.2s ease 0.4s both;
        }

        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        @keyframes grow {
          from { width: 0%; }
          to   { width: 68%; }
        }

        .progress-label {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 12px;
          color: #8a4eb0;
          letter-spacing: 0.05em;
          margin-bottom: 2rem;
        }

        /* ── Séparateur ── */
        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #ddd5e6, transparent);
          margin: 2rem 0;
        }

        /* ── Infos contact ── */
        .contact-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: #3a3140;
          flex-wrap: wrap;
        }

        .contact-row a {
          color: #5a2a7a;
          font-weight: 600;
          text-decoration: none;
          border-bottom: 1.5px solid rgba(90, 42, 122, 0.25);
          transition: border-color 0.2s, color 0.2s;
        }

        .contact-row a:hover {
          color: #e8662b;
          border-color: rgba(232, 102, 43, 0.5);
        }

        /* ── Puce AFIA ── */
        .afia-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(90deg, #5a2a7a, #8a4eb0);
          color: white;
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.15em;
          padding: 4px 18px;
          border-radius: 100px;
          box-shadow: 0 4px 12px rgba(90, 42, 122, 0.3);
        }

        /* ── Dots décoratifs ── */
        .dots {
          position: absolute;
          z-index: 5;
          opacity: 0.15;
        }
        .dots-top { top: 40px; left: 40px; }
        .dots-bottom { bottom: 40px; right: 40px; }

        @media (max-width: 600px) {
          .card { padding: 2.5rem 1.5rem; }
        }
      `}</style>

      <div className="maintenance-root">
        {/* Blobs */}
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />

        {/* Dots décoratifs */}
        <svg className="dots dots-top" width="80" height="80" viewBox="0 0 80 80">
          {[0,20,40,60].map(cx => [0,20,40,60].map(cy => (
            <circle key={`${cx}-${cy}`} cx={cx+8} cy={cy+8} r="3" fill="#5a2a7a" />
          )))}
        </svg>
        <svg className="dots dots-bottom" width="80" height="80" viewBox="0 0 80 80">
          {[0,20,40,60].map(cx => [0,20,40,60].map(cy => (
            <circle key={`${cx}-${cy}`} cx={cx+8} cy={cy+8} r="3" fill="#e8662b" />
          )))}
        </svg>

        {/* Card */}
        <div className="card">
          <div className="afia-badge">AFIA</div>

          {/* Icône */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="icon-ring">
              <svg viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
          </div>

          <span className="eyebrow">Site en cours de construction</span>

          <h1 className="title">
            Nous préparons quelque chose <em>d&rsquo;exceptionnel</em>
          </h1>

          <p className="description">
            Le nouveau site de l&rsquo;association <strong>AFIA</strong> est en pleine construction.
            Nous mettons tout en œuvre pour vous offrir une expérience à la hauteur de
            notre communauté. Revenez bientôt !
          </p>

          {/* Progression */}
          <div className="progress-wrap">
            <div className="progress-bar" />
          </div>
          <p className="progress-label">Construction en cours…</p>

          <div className="divider" />

          {/* Contact */}
          <div className="contact-row">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5a2a7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <span>Une question ?&nbsp;</span>
            <a href="mailto:famillesdicietdailleurs@gmail.com">famillesdicietdailleurs@gmail.com</a>
          </div>
        </div>
      </div>
    </>
  );
}
