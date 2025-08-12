import React from "react";

const NUM_EMOJIS = 30;

const getRandom = (min, max) => Math.random() * (max - min) + min;

export default function DNAEmojis() {
  const emojis = Array.from({ length: NUM_EMOJIS }).map(() => ({
    left: getRandom(0, 95),   // % da tela
    top: getRandom(0, 90),    // % da tela
    delay: getRandom(0, 5),   // segundos
    duration: getRandom(3, 6),// segundos
    size: getRandom(20, 40),  // px
  }));

  return (
    <div style={styles.container}>
      {emojis.map((e, i) => (
        <span
          key={i}
          style={{
            ...styles.emoji,
            left: `${e.left}%`,
            top: `${e.top}%`,
            fontSize: e.size,
            animationDelay: `${e.delay}s`,
            animationDuration: `${e.duration}s`,
          }}
        >
          🧬
        </span>
      ))}

      <div style={styles.content}>
        <h1 style={styles.title}>SAMU</h1>
        <p style={styles.subtitle}>
          Serviço de Atendimento Móvel de Urgência
          <br />
          <strong>Agilidade</strong> e <strong>precisão</strong> no atendimento
        </p>

        <button style={styles.button}>Iniciar</button>

        <div style={styles.footer}>desenvolvido por Mathias</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#2f3e46",
    overflow: "hidden",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#61dafb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  emoji: {
    position: "absolute",
    userSelect: "none",
    opacity: 0.3,
    animationName: "float",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
  },
  content: {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    maxWidth: 700,
    padding: "20px",
    backgroundColor: "rgba(47, 62, 70, 0.75)",
    borderRadius: "15px",
  },
  title: {
    fontSize: "6rem",
    fontWeight: "900",
    marginBottom: "0.3rem",
    letterSpacing: "0.15em",
    userSelect: "none",
  },
  subtitle: {
    fontSize: "1.6rem",
    fontWeight: "600",
    marginBottom: "3rem",
    userSelect: "none",
  },
  button: {
    padding: "15px 50px",
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#2f3e46",
    backgroundColor: "#61dafb",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    boxShadow: "0 6px 20px rgba(97, 218, 251, 0.6)",
    userSelect: "none",
    transition: "all 0.3s ease",
  },
  footer: {
    marginTop: "3rem",
    fontSize: "0.9rem",
    color: "#a0aec0",
  },
};


const styleSheet = document.styleSheets[0];
const keyframes =
  `@keyframes float {
    0% { transform: translateY(0) translateX(0); }
    50% { transform: translateY(-10px) translateX(5px); }
    100% { transform: translateY(0) translateX(0); }
  }`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
