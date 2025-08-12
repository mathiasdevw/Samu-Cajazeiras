import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Home.css";

const NUM_EMOJIS = 30;

const getRandom = (min, max) => Math.random() * (max - min) + min;

export default function Home() {
  const emojis = Array.from({ length: NUM_EMOJIS }).map(() => ({
    left: getRandom(0, 95), // % da tela
    top: getRandom(0, 90), // % da tela
    delay: getRandom(0, 5), // segundos
    duration: getRandom(3, 6), // segundos
    size: getRandom(20, 40), // px
  }));

  return (
    <div className="container">
      {emojis.map((e, i) => (
        <span
          key={i}
          className="emoji"
          style={{
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

      <div className="content">
        <h1 className="title">SAMU</h1>
        <p className="subtitle">
          Serviço de Atendimento Móvel de Urgência
          <br />
          <strong>Agilidade</strong> e <strong>precisão</strong> no atendimento
        </p>

        <Link to="/login">
          <button className="button">Iniciar</button>
        </Link>

        <div className="footer">desenvolvido por Mathias</div>
      </div>
    </div>
  );
}
