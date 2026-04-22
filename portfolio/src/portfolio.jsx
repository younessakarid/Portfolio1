/**
 * ============================================================
 * PORTFOLIO TECH — Esthétique "Terminal Noir"
 * Un portfolio de développeur futuriste et cyberpunk.
 *
 * Sections :
 *  1. Curseur personnalisé
 *  2. Navbar (sticky, verre flouté)
 *  3. Héros (machine à écrire, grille animée)
 *  4. À propos (mise en page fractionnée)
 *  5. Compétences (barres de progression animées, catégorisées)
 *  6. Projets (grille de cartes avec révélation au survol)
 *  7. Expérience (chronologie verticale)
 *  8. Contact (formulaire style terminal)
 *  9. Pied de page
 * ============================================================
 */

import { useState, useEffect, useRef } from "react";
import CVFile from './assets/CV_Alternance _ AKARID_Youness.pdf';

// ─────────────────────────────────────────────
// HOOK RESPONSIVE
// ─────────────────────────────────────────────
function useWindowSize() {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1024,
  });

  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

// ─────────────────────────────────────────────
// DONNÉES — remplacez par vos propres informations
// ─────────────────────────────────────────────

const MOI = {
  nom: "AKARID Youness",
  titres: ["Développeur Full Stack", "Développeur React", "Développeur Web"],
  accroche:
    "Créer des interfaces web modernes et performantes avec React, Node.js et les meilleures pratiques du développement.",
  bio: `Je suis un développeur Full Stack passionné par la création d'applications web interactives et responsives.
Actuellement en formation de Bachelor Concepteur Développeur Web Full Stack, j'ai acquis une expérience solide en
développement Front-End avec React et Vue.js, ainsi qu'en Back-End avec Node.js et Express.
Je suis à la recherche d'une alternance pour mon Master Expert Architecte Web (2026-2028)
avec un rythme de 3 semaines en entreprise / 1 semaine en formation.`,
  localisation: "Paris, France",
  disponible: true,
  email: "younesakarid@gmail.com",
  github: "github.com/younessakarid",
  linkedin: "linkedin.com/in/younessakarid",
};

const COMPETENCES = [
  {
    categorie: "Langages",
    icone: "⌨",
    items: [
      { nom: "JavaScript", niveau: 92 },
      { nom: "Python", niveau: 85 },
      { nom: "Java", niveau: 80 },
      { nom: "SQL", niveau: 88 },
      { nom: "PHP", niveau: 75 },
    ],
  },
  {
    categorie: "Front-End",
    icone: "◈",
    items: [
      { nom: "React.js", niveau: 93 },
      { nom: "Vue.js", niveau: 85 },
      { nom: "Tailwind CSS", niveau: 90 },
      { nom: "Next.js", niveau: 88 },
      { nom: "Angular", niveau: 78 },
    ],
  },
  {
    categorie: "Back-End",
    icone: "⬡",
    items: [
      { nom: "Node.js / Express", niveau: 89 },
      { nom: "MongoDB", niveau: 85 },
      { nom: "PostgreSQL / MySQL", niveau: 88 },
      { nom: "API REST", niveau: 90 },
    ],
  },
  {
    categorie: "Outils & Design",
    icone: "🎨",
    items: [
      { nom: "Git / GitHub", niveau: 91 },
      { nom: "Docker", niveau: 80 },
      { nom: "Figma (UX/UI)", niveau: 82 },
      { nom: "Agile (Scrum)", niveau: 87 },
    ],
  },
];

const PROJETS = [
  {
    id: "01",
    nom: "Application Web RDV Médicaux",
    desc: "Plateforme complète de gestion des rendez-vous médicaux avec interface dynamique, gestion des patients et intégration d'API.",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    lien: "#",
    point_fort: "Full Stack",
    type: "Projet Final (PFE)",
  },
  {
    id: "02",
    nom: "Interface Client Interactive",
    desc: "Conception et développement d'interfaces web responsives et modernes pour améliorer l'expérience utilisateur.",
    tech: ["React", "Tailwind CSS", "JavaScript ES6+"],
    lien: "#",
    point_fort: "UX/UI Responsive",
    type: "Professionnel",
  },
  {
    id: "03",
    nom: "Gestion des Données Métier",
    desc: "Système de gestion des données utilisateurs et des rendez-vous avec une API REST sécurisée et optimisée.",
    tech: ["Express.js", "MongoDB", "API REST", "Git"],
    lien: "#",
    point_fort: "API Sécurisée",
    type: "Back-End",
  },
];

const EXPERIENCES = [
  {
    entreprise: "AGRIDATA CONSULTING",
    poste: "Développeur Front-End (Alternance)",
    periode: "Mai 2024 — Août 2025",
    desc: "Développement d'interfaces web interactives et responsives avec React.js. Création d'interfaces utilisateur modernes garantissant une navigation fluide. Utilisation de Git pour la gestion des versions et la collaboration en équipe. Respect des bonnes pratiques : code propre, composants réutilisables, design réactif et sécurité côté client. Travail en équipe selon la méthode Agile.",
    tags: ["React.js", "Tailwind CSS", "JavaScript ES6+", "Git", "Agile"],
  },
  {
    entreprise: "Institut Européen F2I-DSP",
    poste: "Étudiant — Master Expert Architecte Web",
    periode: "2026 — 2028",
    desc: "Formation avancée en architecture web et développement Full Stack. Apprentissage des bonnes pratiques d'architecture logicielle, des patrons de conception et des technologies modernes. Alternance : 3 semaines en entreprise / 1 semaine en formation.",
    tags: ["Architecture Web", "Full Stack", "Design Patterns", "Masterclass"],
  },
  {
    entreprise: "Institut Européen F2I-DSP",
    poste: "Étudiant — Bachelor Concepteur Développeur Web Full Stack (en cours)",
    periode: "2025 — 2026",
    desc: "Formation complète en développement web Full Stack. Maîtrise des technologies Front-End (React, Vue, Angular) et Back-End (Node.js, Express, Laravel). Projets pratiques et apprentissage des méthodologies Agile.",
    tags: ["React", "Node.js", "SQL", "Développement Web"],
  },
];

// ─────────────────────────────────────────────
// STYLES GLOBAUX
// ─────────────────────────────────────────────
const STYLES_GLOBAUX = `
  @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:       #060608;
    --surface:  #0d0d12;
    --bordure:  #1e1e2e;
    --vert:     #00ff9f;
    --cyan:     #00e5ff;
    --violet:   #b87fff;
    --texte:    #c8cce0;
    --discret:  #4a4a6a;
    --blanc:    #f0f0ff;
    --mono:     'Share Tech Mono', monospace;
    --ui:       'JetBrains Mono', monospace;
    --display:  'Syne', sans-serif;
    --lueur-vert: 0 0 12px rgba(0,255,159,0.4), 0 0 40px rgba(0,255,159,0.1);
    --lueur-cyan: 0 0 12px rgba(0,229,255,0.4), 0 0 40px rgba(0,229,255,0.1);
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--texte);
    font-family: var(--ui);
    cursor: none;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--vert); border-radius: 2px; }

  ::selection { background: rgba(0,255,159,0.25); color: var(--blanc); }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,0.08) 2px,
      rgba(0,0,0,0.08) 4px
    );
    pointer-events: none;
    z-index: 9998;
  }

  a { color: inherit; text-decoration: none; }
  button { cursor: none; }

  @keyframes clignoter { 0%,100%{opacity:1} 50%{opacity:0} }
  @keyframes monter {
    from { opacity:0; transform: translateY(24px); }
    to   { opacity:1; transform: translateY(0); }
  }
  @keyframes glitch {
    0%   { clip-path: inset(40% 0 61% 0); transform: translate(-2px, 2px); }
    25%  { clip-path: inset(90% 0 1% 0);  transform: translate(2px, -2px); }
    50%  { clip-path: inset(20% 0 60% 0); transform: translate(-2px, 0); }
    75%  { clip-path: inset(60% 0 20% 0); transform: translate(2px, 2px); }
    100% { clip-path: inset(10% 0 85% 0); transform: translate(0); }
  }
  @keyframes tourner { to { transform: rotate(360deg); } }
  @keyframes pulsation { 0%,100%{transform:scale(1)} 50%{transform:scale(1.08)} }
  @keyframes flotter {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(-10px); }
  }

  .menu-mobile-btn {
    display: none;
    background: none;
    border: none;
    color: var(--vert);
    font-size: 24px;
    cursor: pointer;
    padding: 8px;
  }
  @media (max-width: 768px) {
    .menu-mobile-btn { display: block; }
  }

  @media (max-width: 768px) {
    body { cursor: default; }
    .curseur-point, .curseur-anneau { display: none !important; }
  }
`;

// ─────────────────────────────────────────────
// CURSEUR PERSONNALISÉ
// ─────────────────────────────────────────────
function Curseur() {
  const pointRef = useRef(null);
  const anneauRef = useRef(null);

  useEffect(() => {
    const point = pointRef.current;
    const anneau = anneauRef.current;
    if (!point || !anneau) return;

    let raf;
    let rx = 0, ry = 0, mx = 0, my = 0;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      point.style.transform = `translate(${mx}px, ${my}px)`;
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      rx = lerp(rx, mx, 0.12);
      ry = lerp(ry, my, 0.12);
      anneau.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    tick();

    const agrandir = () => anneau.classList.add("grand");
    const reduire = () => anneau.classList.remove("grand");
    document.querySelectorAll("a,button,[data-survol]").forEach((el) => {
      el.addEventListener("mouseenter", agrandir);
      el.addEventListener("mouseleave", reduire);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <style>{`
        .curseur-point {
          position: fixed; top: -4px; left: -4px;
          width: 8px; height: 8px;
          background: var(--vert);
          border-radius: 50%;
          pointer-events: none; z-index: 9999;
          box-shadow: var(--lueur-vert);
        }
        .curseur-anneau {
          position: fixed; top: -20px; left: -20px;
          width: 40px; height: 40px;
          border: 1px solid rgba(0,255,159,0.5);
          border-radius: 50%;
          pointer-events: none; z-index: 9999;
          transition: width .3s, height .3s, border-color .3s;
        }
        .curseur-anneau.grand {
          width: 60px; height: 60px;
          top: -30px; left: -30px;
          border-color: var(--cyan);
        }
        @media (hover: none) {
          .curseur-point, .curseur-anneau { display: none; }
        }
      `}</style>
      <div className="curseur-point" ref={pointRef} />
      <div className="curseur-anneau" ref={anneauRef} />
    </>
  );
}

// ─────────────────────────────────────────────
// FOND GRILLE ANIMÉ
// ─────────────────────────────────────────────
function FondGrille() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grille" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00ff9f" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grille)" />
      </svg>
      <div style={{
        position: "absolute", top: "15%", right: "10%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,255,159,0.07) 0%, transparent 70%)",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "5%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)",
      }} />
    </div>
  );
}

// ─────────────────────────────────────────────
// HOOK MACHINE À ÉCRIRE
// ─────────────────────────────────────────────
function useMachineEcrire(mots, vitesse = 80, pause = 1800) {
  const [affiche, setAffiche] = useState("");
  const [idxMot, setIdxMot] = useState(0);
  const [phase, setPhase] = useState("ecriture");

  useEffect(() => {
    const mot = mots[idxMot % mots.length];

    if (phase === "ecriture") {
      if (affiche.length < mot.length) {
        const t = setTimeout(() => setAffiche(mot.slice(0, affiche.length + 1)), vitesse);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("effacement"), pause);
        return () => clearTimeout(t);
      }
    }

    if (phase === "effacement") {
      if (affiche.length > 0) {
        const t = setTimeout(() => setAffiche(affiche.slice(0, -1)), vitesse / 2);
        return () => clearTimeout(t);
      } else {
        setIdxMot((i) => i + 1);
        setPhase("ecriture");
      }
    }
  }, [affiche, phase, idxMot, mots, vitesse, pause]);

  return affiche;
}

// ─────────────────────────────────────────────
// HOOK INTERSECTION OBSERVER
// ─────────────────────────────────────────────
function useVisible(seuil = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: seuil }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [seuil]);

  return [ref, visible];
}

// ─────────────────────────────────────────────
// CONTENEUR DE SECTION — apparition au scroll
// ─────────────────────────────────────────────
function Section({ id, enfants, style = {}, children }) {
  const [ref, visible] = useVisible();
  const contenu = enfants || children;

  return (
    <section
      id={id}
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        ...style,
      }}
    >
      {contenu}
    </section>
  );
}

// ─────────────────────────────────────────────
// ÉTIQUETTE DE SECTION
// ─────────────────────────────────────────────
function EtiquetteSection({ num, label }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 16,
      marginBottom: 56, fontFamily: "var(--mono)",
    }}>
      <span style={{ color: "var(--vert)", fontSize: 13, letterSpacing: 3 }}>[ {num} ]</span>
      <span style={{ color: "var(--blanc)", fontSize: 13, letterSpacing: 4, textTransform: "uppercase" }}>
        {label}
      </span>
      <div style={{ flex: 1, height: 1, background: "var(--bordure)" }} />
    </div>
  );
}

// ─────────────────────────────────────────────
// BARRE DE NAVIGATION
// ─────────────────────────────────────────────
function Navbar() {
  const [defilé, setDefilé] = useState(false);
  const [actif, setActif] = useState("accueil");
  const [menuOuvert, setMenuOuvert] = useState(false);
  const { width } = useWindowSize();
  const mobile = width <= 768;

  const liens = [
    { id: "accueil", label: "Accueil" },
    { id: "apropos", label: "À propos" },
    { id: "competences", label: "Compétences" },
    { id: "projets", label: "Projets" },
    { id: "experience", label: "Expérience" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const onScroll = () => setDefilé(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const naviguer = (id) => {
    setActif(id);
    setMenuOuvert(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: defilé ? "rgba(6,6,8,0.9)" : "transparent",
      backdropFilter: defilé ? "blur(20px)" : "none",
      borderBottom: defilé ? "1px solid var(--bordure)" : "none",
      transition: "all 0.4s ease",
      padding: mobile ? "0 16px" : "0 clamp(16px, 5vw, 80px)",
    }}>
      <nav style={{
        maxWidth: 1200, margin: "0 auto",
        height: 64, display: "flex",
        alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <div
          onClick={() => naviguer("accueil")}
          data-survol
          style={{
            fontFamily: "var(--mono)",
            color: "var(--vert)",
            fontSize: mobile ? "12px" : "clamp(14px, 3vw, 18px)",
            letterSpacing: 2,
            cursor: "pointer",
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: "var(--discret)" }}>~/</span>
          youness.dev
          <span style={{
            display: "inline-block", width: 8, height: 16,
            background: "var(--vert)", marginLeft: 4, verticalAlign: "middle",
            animation: "clignoter 1s steps(1) infinite",
          }} />
        </div>

        {/* Liens desktop */}
        {!mobile && (
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {liens.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => naviguer(id)}
                data-survol
                style={{
                  background: "none", border: "none",
                  fontFamily: "var(--mono)",
                  fontSize: 11, letterSpacing: 2,
                  textTransform: "uppercase",
                  color: actif === id ? "var(--vert)" : "var(--discret)",
                  padding: "8px 12px", borderRadius: 4,
                  transition: "color 0.2s", position: "relative",
                }}
              >
                {actif === id && (
                  <span style={{
                    position: "absolute", bottom: 2, left: "50%",
                    transform: "translateX(-50%)",
                    width: 4, height: 4, borderRadius: "50%",
                    background: "var(--vert)",
                    boxShadow: "var(--lueur-vert)",
                  }} />
                )}
                {label}
              </button>
            ))}

            {MOI.disponible && (
              <div style={{
                display: "flex", alignItems: "center", gap: 6,
                background: "rgba(0,255,159,0.07)",
                border: "1px solid rgba(0,255,159,0.2)",
                borderRadius: 20, padding: "4px 12px",
                fontFamily: "var(--mono)", fontSize: 11,
                color: "var(--vert)", marginLeft: 8,
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "var(--vert)",
                  boxShadow: "var(--lueur-vert)",
                  animation: "pulsation 2s ease infinite",
                  display: "inline-block",
                }} />
                DISPONIBLE
              </div>
            )}
          </div>
        )}

        {/* Bouton menu mobile */}
        {mobile && (
          <button
            className="menu-mobile-btn"
            onClick={() => setMenuOuvert(!menuOuvert)}
            style={{
              background: "none", border: "none",
              color: "var(--vert)", fontSize: "24px",
              cursor: "pointer", padding: "8px", zIndex: 1001,
            }}
          >
            {menuOuvert ? "✕" : "☰"}
          </button>
        )}
      </nav>

      {/* Menu mobile déroulant */}
      {mobile && menuOuvert && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0,
          background: "rgba(6,6,8,0.97)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--bordure)",
          zIndex: 999,
          display: "flex", flexDirection: "column",
        }}>
          {liens.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => naviguer(id)}
              style={{
                border: "none",
                background: actif === id ? "rgba(0,255,159,0.1)" : "none",
                color: actif === id ? "var(--vert)" : "var(--texte)",
                padding: "16px 24px",
                textAlign: "left",
                fontFamily: "var(--mono)",
                fontSize: "14px",
                borderBottom: "1px solid var(--bordure)",
                transition: "background 0.2s",
              }}
            >
              {label.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

// ─────────────────────────────────────────────
// SECTION HÉROS
// ─────────────────────────────────────────────
function Hero() {
  const frappe = useMachineEcrire(MOI.titres, 75, 2000);
  const { width } = useWindowSize();
  const mobile = width <= 768;

  return (
    <section
      id="accueil"
      style={{
        minHeight: mobile ? "auto" : "100vh",
        position: "relative",
        display: "flex", alignItems: "center",
        padding: mobile
          ? "100px 16px 60px"
          : "120px clamp(24px, 5vw, 80px) 80px",
        overflow: "hidden",
      }}
    >
      <FondGrille />

      {/* Coins décoratifs (desktop uniquement) */}
      {!mobile &&
        [
          { top: 24, left: 24 },
          { top: 24, right: 24 },
          { bottom: 24, left: 24 },
          { bottom: 24, right: 24 },
        ].map((pos, i) => (
          <div
            key={i}
            style={{
              position: "absolute", ...pos,
              width: 40, height: 40,
              borderTop: i < 2 ? "1px solid var(--vert)" : "none",
              borderBottom: i >= 2 ? "1px solid var(--vert)" : "none",
              borderLeft: i % 2 === 0 ? "1px solid var(--vert)" : "none",
              borderRight: i % 2 === 1 ? "1px solid var(--vert)" : "none",
              opacity: 0.4,
            }}
          />
        ))}

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative" }}>
        {/* Ligne de commande */}
        <div style={{
          fontFamily: "var(--mono)",
          fontSize: mobile ? "11px" : "13px",
          color: "var(--discret)", marginBottom: 24,
          animation: "monter 0.6s ease both",
        }}>
          <span style={{ color: "var(--vert)" }}>visiteur@portfolio</span>
          <span style={{ color: "var(--discret)" }}>:~$</span>
          <span style={{ color: "var(--texte)", marginLeft: 8 }}>./init profil.sh</span>
        </div>

        {/* Nom principal */}
        <h1 style={{
          fontFamily: "var(--display)",
          fontSize: mobile ? "clamp(32px, 8vw, 48px)" : "clamp(52px, 8vw, 110px)",
          fontWeight: 800,
          color: "var(--blanc)",
          lineHeight: 0.95,
          letterSpacing: "-2px",
          animation: "monter 0.6s 0.1s ease both",
          opacity: 0,
        }}>
          {MOI.nom.split(" ").map((mot, i) => (
            <span key={i} style={{ display: "block" }}>
              {i === 1 ? (
                <span style={{ WebkitTextStroke: "1px var(--vert)", color: "transparent" }}>
                  {mot}
                </span>
              ) : (
                mot
              )}
            </span>
          ))}
        </h1>

        {/* Machine à écrire */}
        <div style={{
          marginTop: 24,
          fontFamily: "var(--mono)",
          fontSize: mobile ? "clamp(13px, 2.5vw, 18px)" : "clamp(16px, 2.5vw, 24px)",
          color: "var(--cyan)",
          height: mobile ? 24 : 36,
          animation: "monter 0.6s 0.25s ease both",
          opacity: 0,
        }}>
          <span style={{ color: "var(--discret)" }}>// </span>
          {frappe}
          <span style={{ animation: "clignoter 0.8s steps(1) infinite", color: "var(--cyan)" }}>
            ▋
          </span>
        </div>

        {/* Accroche */}
        <p style={{
          marginTop: 24,
          maxWidth: 560,
          fontFamily: "var(--ui)",
          fontSize: mobile ? "14px" : "16px",
          lineHeight: 1.7,
          color: "var(--texte)",
          animation: "monter 0.6s 0.4s ease both",
          opacity: 0,
        }}>
          {MOI.accroche}
        </p>

        {/* Boutons d'action */}
        <div style={{
          marginTop: 40,
          display: "flex", gap: mobile ? 12 : 16,
          flexWrap: "wrap",
          animation: "monter 0.6s 0.55s ease both",
          opacity: 0,
        }}>
          <button
            onClick={() => document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" })}
            data-survol
            style={{
              background: "var(--vert)", color: "#000",
              border: "none",
              fontFamily: "var(--mono)",
              fontSize: mobile ? "11px" : "13px",
              letterSpacing: 2, textTransform: "uppercase",
              padding: mobile ? "12px 20px" : "14px 28px",
              borderRadius: 2, fontWeight: 700,
              boxShadow: "var(--lueur-vert)",
              transition: "transform 0.2s, box-shadow 0.2s",
              flex: mobile ? "1 1 calc(50% - 6px)" : "0 0 auto",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            Voir mes projets →
          </button>
          <button
            onClick={() => {
              const lien = document.createElement('a');
              lien.href = CVFile;
              lien.download = 'CV_AKARID_Youness.pdf';
              document.body.appendChild(lien);
              lien.click();
              document.body.removeChild(lien);
            }}
            data-survol
            style={{
              background: "transparent", color: "var(--texte)",
              border: "1px solid var(--bordure)",
              fontFamily: "var(--mono)",
              fontSize: mobile ? "11px" : "13px",
              letterSpacing: 2, textTransform: "uppercase",
              padding: mobile ? "12px 20px" : "14px 28px",
              borderRadius: 2,
              transition: "border-color 0.2s, color 0.2s",
              flex: mobile ? "1 1 calc(50% - 6px)" : "0 0 auto",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--vert)";
              e.currentTarget.style.color = "var(--vert)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--bordure)";
              e.currentTarget.style.color = "var(--texte)";
            }}
          >
            Télécharger CV ↓
          </button>
        </div>

        {/* Statistiques */}
        <div style={{
          marginTop: mobile ? 40 : 72,
          display: "grid",
          gridTemplateColumns: mobile ? "1fr 1fr" : "repeat(4, 1fr)",
          gap: mobile ? 24 : 48,
          animation: "monter 0.6s 0.7s ease both",
          opacity: 0,
        }}>
          {[
            { val: "1+", label: "An d'expérience" },
            { val: "12+", label: "Projets réalisés" },
            { val: "10+", label: "Technologies" },
            { val: "3", label: "Langues parlées" },
          ].map(({ val, label }) => (
            <div key={label}>
              <div style={{
                fontFamily: "var(--display)",
                fontSize: mobile ? 28 : 36,
                fontWeight: 800, color: "var(--blanc)", lineHeight: 1,
              }}>
                {val}
              </div>
              <div style={{
                fontFamily: "var(--mono)",
                fontSize: mobile ? "9px" : "11px",
                color: "var(--discret)",
                letterSpacing: 2, marginTop: 4,
                textTransform: "uppercase",
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicateur de défilement */}
      {!mobile && (
        <div style={{
          position: "absolute", bottom: 40, left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: 8,
          fontFamily: "var(--mono)", fontSize: 10,
          color: "var(--discret)", letterSpacing: 3,
          animation: "flotter 2s ease infinite",
        }}>
          <span>DÉFILER</span>
          <div style={{
            width: 1, height: 40,
            background: "linear-gradient(to bottom, var(--discret), transparent)",
          }} />
        </div>
      )}
    </section>
  );
}

// ─────────────────────────────────────────────
// SECTION À PROPOS
// ─────────────────────────────────────────────
function APropos() {
  const { width } = useWindowSize();
  const mobile = width <= 768;

  return (
    <Section
      id="apropos"
      style={{
        padding: mobile ? "80px 16px" : "120px clamp(24px, 5vw, 80px)",
        maxWidth: 1200, margin: "0 auto",
      }}
    >
      <EtiquetteSection num="01" label="À Propos" />

      <div style={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
        gap: mobile ? 40 : 80,
        alignItems: "center",
      }}>
        {/* Texte */}
        <div>
          <h2 style={{
            fontFamily: "var(--display)",
            fontSize: mobile ? "clamp(24px, 4vw, 40px)" : "clamp(32px, 4vw, 52px)",
            fontWeight: 800, color: "var(--blanc)",
            lineHeight: 1.1, marginBottom: 28,
          }}>
            Créer des interfaces{" "}
            <span style={{ color: "var(--vert)" }}>modernes</span>{" "}
            et des systèmes{" "}
            <span style={{ color: "var(--cyan)" }}>performants</span>.
          </h2>

          {MOI.bio
            .split("\n")
            .filter(Boolean)
            .map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--ui)",
                  fontSize: mobile ? "14px" : "15px",
                  lineHeight: 1.8, color: "var(--texte)", marginBottom: 16,
                }}
              >
                {p.trim()}
              </p>
            ))}

          {/* Informations */}
          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { label: "Localisation", val: MOI.localisation },
              { label: "E-mail", val: MOI.email },
              { label: "GitHub", val: MOI.github },
            ].map(({ label, val }) => (
              <div
                key={label}
                style={{
                  display: "flex", gap: 16, alignItems: "baseline",
                  fontFamily: "var(--mono)",
                  fontSize: mobile ? "12px" : "13px",
                }}
              >
                <span style={{ color: "var(--vert)", minWidth: 100 }}>{label}</span>
                <span style={{ color: "var(--discret)" }}>→</span>
                <span style={{ color: "var(--texte)", wordBreak: "break-all" }}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Carte terminal */}
        <div style={{
          background: "var(--surface)",
          border: "1px solid var(--bordure)",
          borderRadius: 8, overflow: "hidden",
          fontFamily: "var(--mono)",
          fontSize: mobile ? "11px" : "13px",
          boxShadow: "0 0 60px rgba(0,255,159,0.04)",
        }}>
          {/* Barre de titre */}
          <div style={{
            background: "#111118",
            borderBottom: "1px solid var(--bordure)",
            padding: "10px 16px",
            display: "flex", alignItems: "center", gap: 8,
          }}>
            {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
              <span
                key={i}
                style={{
                  width: 10, height: 10, borderRadius: "50%",
                  background: c, display: "inline-block",
                }}
              />
            ))}
            <span style={{ marginLeft: 8, color: "var(--discret)", fontSize: 11 }}>
              profil.json
            </span>
          </div>

          {/* Contenu JSON */}
          <div style={{ padding: mobile ? 16 : 24, lineHeight: 1.8 }}>
            {[
              ["{", ""],
              ['  "nom":', `"${MOI.nom}"`],
              ['  "poste":', '"Développeur Full Stack"'],
              ['  "localisation":', `"${MOI.localisation}"`],
              ['  "disponible":', "true"],
              ['  "spécialités":', "["],
              ['    "React & Vue.js",', ""],
              ['    "Node.js & Express",', ""],
              ['    "Architecture Web"', ""],
              ["  ],", ""],
              ['  "formation":', '"Bachelor Concepteur Développeur Web Full Stack (en cours)"'],
              ['  "centres_intérêt":', '["Open Source", "Design Web", "Innovation"]'],
              ["}", ""],
            ].map(([clé, val], i) => (
              <div key={i}>
                <span style={{ color: "var(--violet)" }}>{clé}</span>
                {val && (
                  <span
                    style={{
                      color:
                        val.startsWith('"')
                          ? "var(--cyan)"
                          : val === "true"
                          ? "var(--vert)"
                          : val === "["
                          ? "var(--blanc)"
                          : "var(--texte)",
                      marginLeft: 4,
                    }}
                  >
                    {val}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─────────────────────────────────────────────
// BARRE DE COMPÉTENCE
// ─────────────────────────────────────────────
function BarreCompetence({ nom, niveau, delai = 0 }) {
  const [ref, visible] = useVisible(0.1);

  return (
    <div ref={ref} style={{ marginBottom: 18 }}>
      <div style={{
        display: "flex", justifyContent: "space-between",
        fontFamily: "var(--mono)", fontSize: 12,
        color: "var(--texte)", marginBottom: 8,
      }}>
        <span>{nom}</span>
        <span style={{ color: "var(--vert)" }}>{niveau}%</span>
      </div>
      <div style={{
        height: 4, background: "var(--bordure)",
        borderRadius: 2, overflow: "hidden",
      }}>
        <div style={{
          height: "100%", borderRadius: 2,
          background: "linear-gradient(90deg, var(--vert), var(--cyan))",
          boxShadow: "var(--lueur-vert)",
          width: visible ? `${niveau}%` : "0%",
          transition: `width 1.2s ${delai}s cubic-bezier(0.4, 0, 0.2, 1)`,
        }} />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// SECTION COMPÉTENCES
// ─────────────────────────────────────────────
function Competences() {
  const { width } = useWindowSize();
  const mobile = width <= 768;
  const petit = width <= 480;

  return (
    <Section
      id="competences"
      style={{
        padding: mobile ? "80px 16px" : "120px clamp(24px, 5vw, 80px)",
        background: "linear-gradient(180deg, transparent, rgba(0,255,159,0.02) 50%, transparent)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <EtiquetteSection num="02" label="Compétences & Stack" />

        <div style={{
          display: "grid",
          gridTemplateColumns: petit
            ? "1fr"
            : mobile
            ? "repeat(2, 1fr)"
            : "repeat(auto-fit, minmax(280px, 1fr))",
          gap: mobile ? 20 : 32,
        }}>
          {COMPETENCES.map((cat) => (
            <div
              key={cat.categorie}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--bordure)",
                borderRadius: 8,
                padding: mobile ? 20 : 32,
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,255,159,0.3)";
                e.currentTarget.style.boxShadow = "0 0 40px rgba(0,255,159,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--bordure)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
                <span style={{ fontSize: 22, color: "var(--vert)" }}>{cat.icone}</span>
                <span style={{
                  fontFamily: "var(--mono)",
                  fontSize: mobile ? "11px" : "12px",
                  letterSpacing: 3, textTransform: "uppercase",
                  color: "var(--blanc)",
                }}>
                  {cat.categorie}
                </span>
              </div>

              {cat.items.map((comp, i) => (
                <BarreCompetence
                  key={comp.nom}
                  nom={comp.nom}
                  niveau={comp.niveau}
                  delai={i * 0.1}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─────────────────────────────────────────────
// CARTE PROJET
// ─────────────────────────────────────────────
function CarteProjet({ projet }) {
  const [survol, setSurvol] = useState(false);

  const couleurType = {
    "Projet Final (PFE)": "var(--vert)",
    Professionnel: "var(--cyan)",
    "Back-End": "var(--violet)",
    Recherche: "#ff9f00",
  }[projet.type] || "var(--discret)";

  return (
    <div
      data-survol
      onMouseEnter={() => setSurvol(true)}
      onMouseLeave={() => setSurvol(false)}
      style={{
        background: "var(--surface)",
        border: `1px solid ${survol ? "rgba(0,255,159,0.25)" : "var(--bordure)"}`,
        borderRadius: 8, padding: 28,
        position: "relative", overflow: "hidden",
        transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
        transform: survol ? "translateY(-4px)" : "translateY(0)",
        boxShadow: survol
          ? "0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(0,255,159,0.05)"
          : "none",
      }}
    >
      {/* En-tête */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "flex-start", marginBottom: 16,
      }}>
        <span style={{
          fontFamily: "var(--mono)", fontSize: 12,
          color: "var(--discret)", letterSpacing: 2,
        }}>
          // {projet.id}
        </span>
        <span style={{
          fontFamily: "var(--mono)", fontSize: 10,
          color: couleurType, border: `1px solid ${couleurType}`,
          borderRadius: 2, padding: "2px 8px", letterSpacing: 2, opacity: 0.8,
        }}>
          {projet.type}
        </span>
      </div>

      {/* Titre */}
      <h3 style={{
        fontFamily: "var(--display)",
        fontSize: 22, fontWeight: 700,
        color: "var(--blanc)", marginBottom: 12,
      }}>
        {projet.nom}
      </h3>

      {/* Point fort */}
      <div style={{
        display: "inline-block",
        fontFamily: "var(--mono)", fontSize: 11,
        color: "var(--vert)", letterSpacing: 2,
        background: "rgba(0,255,159,0.07)",
        border: "1px solid rgba(0,255,159,0.15)",
        borderRadius: 2, padding: "3px 10px", marginBottom: 14,
      }}>
        ▲ {projet.point_fort}
      </div>

      {/* Description */}
      <p style={{
        fontFamily: "var(--ui)",
        fontSize: 14, lineHeight: 1.7,
        color: "var(--texte)", marginBottom: 24,
      }}>
        {projet.desc}
      </p>

      {/* Technologies */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {projet.tech.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "var(--mono)", fontSize: 11,
              color: "var(--discret)",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid var(--bordure)",
              borderRadius: 2, padding: "3px 10px",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Lien au survol */}
      <a
        href={projet.lien}
        style={{
          display: "block", marginTop: 24,
          fontFamily: "var(--mono)", fontSize: 12,
          color: "var(--vert)", letterSpacing: 2,
          opacity: survol ? 1 : 0,
          transform: survol ? "translateY(0)" : "translateY(4px)",
          transition: "opacity 0.3s, transform 0.3s",
        }}
      >
        VOIR LE PROJET →
      </a>

      {/* Lueur au survol */}
      {survol && (
        <div style={{
          position: "absolute", top: -20, right: -20,
          width: 120, height: 120, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,255,159,0.08), transparent 70%)",
          pointerEvents: "none",
        }} />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// SECTION PROJETS
// ─────────────────────────────────────────────
function Projets() {
  const { width } = useWindowSize();
  const mobile = width <= 768;

  return (
    <Section
      id="projets"
      style={{
        padding: mobile ? "80px 16px" : "120px clamp(24px, 5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <EtiquetteSection num="03" label="Projets Sélectionnés" />

        <div style={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "repeat(auto-fit, minmax(320px, 1fr))",
          gap: mobile ? 20 : 24,
        }}>
          {PROJETS.map((p) => (
            <CarteProjet key={p.id} projet={p} />
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─────────────────────────────────────────────
// SECTION EXPÉRIENCE
// ─────────────────────────────────────────────
function Experience() {
  const { width } = useWindowSize();
  const mobile = width <= 768;

  return (
    <Section
      id="experience"
      style={{
        padding: mobile ? "80px 16px" : "120px clamp(24px, 5vw, 80px)",
        background: "linear-gradient(180deg, transparent, rgba(0,229,255,0.01) 50%, transparent)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <EtiquetteSection num="04" label="Expérience & Formation" />

        <div style={{ position: "relative" }}>
          {/* Ligne de chronologie */}
          {!mobile && (
            <div style={{
              position: "absolute", top: 0, bottom: 0, left: 16,
              width: 1, background: "var(--bordure)",
            }} />
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: mobile ? 32 : 48 }}>
            {EXPERIENCES.map((exp, i) => (
              <div key={i} style={{ paddingLeft: mobile ? 0 : 56, position: "relative" }}>
                {/* Point de chronologie */}
                {!mobile && (
                  <div style={{
                    position: "absolute", left: 8, top: 4,
                    width: 18, height: 18, borderRadius: "50%",
                    border: "2px solid var(--vert)",
                    background: "var(--bg)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <div style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: "var(--vert)",
                      boxShadow: "var(--lueur-vert)",
                    }} />
                  </div>
                )}

                {/* Carte */}
                <div
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--bordure)",
                    borderRadius: 8, padding: 28,
                    transition: "border-color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(0,255,159,0.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "var(--bordure)")
                  }
                >
                  <div style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "flex-start", marginBottom: 8,
                    flexWrap: "wrap", gap: 8,
                  }}>
                    <div>
                      <span style={{
                        fontFamily: "var(--display)",
                        fontSize: 20, fontWeight: 700,
                        color: "var(--blanc)", display: "block",
                      }}>
                        {exp.poste}
                      </span>
                      <span style={{
                        fontFamily: "var(--mono)", fontSize: 14,
                        color: "var(--vert)",
                      }}>
                        {exp.entreprise}
                      </span>
                    </div>
                    <span style={{
                      fontFamily: "var(--mono)", fontSize: 12,
                      color: "var(--discret)",
                    }}>
                      {exp.periode}
                    </span>
                  </div>

                  <p style={{
                    fontFamily: "var(--ui)",
                    fontSize: 14, lineHeight: 1.7,
                    color: "var(--texte)", marginBottom: 16,
                  }}>
                    {exp.desc}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "var(--mono)", fontSize: 11,
                          color: "var(--cyan)",
                          background: "rgba(0,229,255,0.05)",
                          border: "1px solid rgba(0,229,255,0.15)",
                          borderRadius: 2, padding: "3px 10px",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─────────────────────────────────────────────
// SECTION CONTACT
// ─────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [statut, setStatut] = useState("inactif"); // inactif | envoi | envoyé
  const { width } = useWindowSize();
  const mobile = width <= 768;

  const handleEnvoyer = () => {
    if (!form.nom || !form.email || !form.message) return;
    setStatut("envoi");
    setTimeout(() => setStatut("envoyé"), 1800);
  };

  const styleInput = {
    display: "block", width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid var(--bordure)",
    borderRadius: 4,
    padding: "12px 16px",
    fontFamily: "var(--mono)", fontSize: 14,
    color: "var(--texte)",
    outline: "none",
    transition: "border-color 0.2s",
    marginTop: 8,
  };

  return (
    <Section
      id="contact"
      style={{
        padding: mobile ? "80px 16px" : "120px clamp(24px, 5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <EtiquetteSection num="05" label="Me Contacter" />

        <div style={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
          gap: mobile ? 40 : 80,
          alignItems: "start",
        }}>
          {/* Gauche */}
          <div>
            <h2 style={{
              fontFamily: "var(--display)",
              fontSize: mobile ? "clamp(28px, 5vw, 48px)" : "clamp(32px, 4vw, 52px)",
              fontWeight: 800, color: "var(--blanc)",
              lineHeight: 1.1, marginBottom: 24,
            }}>
              Construisons quelque chose{" "}
              <span style={{ color: "var(--vert)" }}>de remarquable</span>.
            </h2>
            <p style={{
              fontFamily: "var(--ui)",
              fontSize: 15, lineHeight: 1.8,
              color: "var(--texte)", marginBottom: 40,
            }}>
              Je suis actuellement disponible pour des opportunités d'alternance, des missions
              de consulting technique et des collaborations open source. Envoyez-moi un message,
              je vous réponds sous 24 heures.
            </p>

            {/* Liens sociaux */}
            {[
              { label: "E-mail", val: MOI.email },
              { label: "GitHub", val: MOI.github },
              { label: "LinkedIn", val: MOI.linkedin },
            ].map(({ label, val }) => (
              <a
                key={label}
                href="#"
                data-survol
                style={{
                  display: "flex", alignItems: "center", gap: 16,
                  fontFamily: "var(--mono)", fontSize: 13,
                  color: "var(--texte)", padding: "14px 0",
                  borderBottom: "1px solid var(--bordure)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--vert)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--texte)")}
              >
                <span style={{ color: "var(--discret)", minWidth: 80 }}>{label}</span>
                <span>→</span>
                <span>{val}</span>
              </a>
            ))}
          </div>

          {/* Formulaire terminal */}
          <div style={{
            background: "var(--surface)",
            border: "1px solid var(--bordure)",
            borderRadius: 8, overflow: "hidden",
          }}>
            {/* Barre de titre */}
            <div style={{
              background: "#111118",
              borderBottom: "1px solid var(--bordure)",
              padding: "10px 16px",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
                <span
                  key={i}
                  style={{
                    width: 10, height: 10, borderRadius: "50%",
                    background: c, display: "inline-block",
                  }}
                />
              ))}
              <span style={{
                marginLeft: 8, color: "var(--discret)", fontSize: 11,
                fontFamily: "var(--mono)",
              }}>
                envoyer_message.sh
              </span>
            </div>

            <div style={{ padding: 28 }}>
              {statut === "envoyé" ? (
                <div style={{
                  textAlign: "center", padding: "40px 0",
                  fontFamily: "var(--mono)",
                }}>
                  <div style={{ fontSize: 40, marginBottom: 16, color: "var(--vert)" }}>✓</div>
                  <div style={{ color: "var(--vert)", fontSize: 14, letterSpacing: 2 }}>
                    MESSAGE ENVOYÉ
                  </div>
                  <div style={{ color: "var(--discret)", fontSize: 12, marginTop: 8 }}>
                    Je vous recontacterai très bientôt.
                  </div>
                </div>
              ) : (
                <>
                  {[
                    { cle: "nom", label: "Votre Nom", type: "text", placeholder: "Jean Dupont" },
                    { cle: "email", label: "Adresse E-mail", type: "email", placeholder: "jean@exemple.com" },
                  ].map(({ cle, label, type, placeholder }) => (
                    <div key={cle} style={{ marginBottom: 20 }}>
                      <label style={{
                        fontFamily: "var(--mono)", fontSize: 11,
                        color: "var(--vert)", letterSpacing: 2, display: "block",
                      }}>
                        $ {label.toUpperCase()}
                      </label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={form[cle]}
                        onChange={(e) => setForm((f) => ({ ...f, [cle]: e.target.value }))}
                        style={styleInput}
                        onFocus={(e) => (e.target.style.borderColor = "var(--vert)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--bordure)")}
                      />
                    </div>
                  ))}

                  <div style={{ marginBottom: 24 }}>
                    <label style={{
                      fontFamily: "var(--mono)", fontSize: 11,
                      color: "var(--vert)", letterSpacing: 2, display: "block",
                    }}>
                      $ MESSAGE
                    </label>
                    <textarea
                      placeholder="Parlez-moi de votre projet ou opportunité..."
                      value={form.message}
                      rows={5}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      style={{ ...styleInput, resize: "vertical", lineHeight: 1.6 }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--vert)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--bordure)")}
                    />
                  </div>

                  <button
                    onClick={handleEnvoyer}
                    data-survol
                    disabled={statut === "envoi"}
                    style={{
                      width: "100%",
                      background: "var(--vert)", color: "#000",
                      border: "none", borderRadius: 4,
                      fontFamily: "var(--mono)",
                      fontSize: 13, letterSpacing: 3,
                      textTransform: "uppercase", fontWeight: 700,
                      padding: "14px",
                      boxShadow: "var(--lueur-vert)",
                      opacity: statut === "envoi" ? 0.7 : 1,
                      transition: "opacity 0.2s, transform 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                  >
                    {statut === "envoi" ? "ENVOI EN COURS..." : "ENVOYER LE MESSAGE →"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─────────────────────────────────────────────
// PIED DE PAGE
// ─────────────────────────────────────────────
function PiedDePage() {
  const { width } = useWindowSize();
  const mobile = width <= 768;

  return (
    <footer style={{
      borderTop: "1px solid var(--bordure)",
      padding: mobile ? "24px 16px" : "40px clamp(24px, 5vw, 80px)",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex",
        justifyContent: mobile ? "center" : "space-between",
        alignItems: "center",
        flexDirection: mobile ? "column" : "row",
        gap: 12,
        fontFamily: "var(--mono)", fontSize: 12,
        color: "var(--discret)",
        textAlign: "center",
      }}>
        <span>
          <span style={{ color: "var(--vert)" }}>~/</span>youness.dev — conçu et développé avec soin.
        </span>
        <span>
          © {new Date().getFullYear()} {MOI.nom}. Tous droits réservés.
        </span>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────
// APPLICATION PRINCIPALE
// ─────────────────────────────────────────────
export default function Portfolio() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = STYLES_GLOBAUX;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  return (
    <>
      <Curseur />
      <Navbar />
      <Hero />
      <APropos />
      <Competences />
      <Projets />
      <Experience />
      <Contact />
      <PiedDePage />
    </>
  );
}