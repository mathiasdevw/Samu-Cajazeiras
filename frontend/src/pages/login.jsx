import React, { useState } from 'react';
import '../styles/login.css';

export default function Login() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você vai chamar o backend para autenticar
    console.log('Login:', login, 'Senha:', senha);
  };

  return (
    <div className="login-container">
      <h2>SAMU Cajazeiras</h2>
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
        <button type="submit">Entrar</button>
      </form>

      <div className="main-page">
        Serviço de Atendimento Móvel de Urgência<br/>
        <strong>Agilidade</strong> e <strong>precisão</strong> no atendimento
      </div>
    </div>
  );
}
