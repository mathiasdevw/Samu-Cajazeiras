import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const NUM_EMOJIS = 15;

const getRandom = (min, max) => Math.random() * (max - min) + min;

export default function Login() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const emojis = Array.from({ length: NUM_EMOJIS }).map(() => ({
    left: getRandom(0, 95),
    top: getRandom(0, 90),
    delay: getRandom(0, 5),
    duration: getRandom(3, 6),
    size: getRandom(15, 30),
    emoji: ["🚑", "⚕️", "🏥", "🩺", "💉", "🩹", "🚨"][Math.floor(Math.random() * 7)],
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você vai chamar o backend para autenticar
    console.log('Login:', login, 'Senha:', senha);
  };

  return (
    <div className="login-container">
      {emojis.map((e, i) => (
        <span
          key={i}
          className="emoji"
          style={{
            left: `${e.left}%`,
            top: `${e.top}%`,
            fontSize: `${e.size}px`,
            animationDelay: `${e.delay}s`,
            animationDuration: `${e.duration}s`,
          }}
        >
          {e.emoji}
        </span>
      ))}

      <div className="login-box">
        <div className="logo">
          <h1>SAMU</h1>
          <h2>Cajazeiras</h2>
        </div>
        
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Login" 
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required 
          />
          <input 
            type="password" 
            placeholder="Senha" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required 
          />
          <button type="submit">ENTRAR</button>
        </form>

        <div className="main-page">
          <p>Serviço de Atendimento Móvel de Urgência</p>
          <p className="slogan">
            <span className="highlight">Agilidade</span> e <span className="highlight">precisão</span> no atendimento
          </p>
        </div>

        <div className="footer">
          <Link to="/" className="back-link">← Voltar à página inicial</Link>
          <p>SAMU Cajazeiras © {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}