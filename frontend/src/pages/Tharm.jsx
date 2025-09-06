import '../styles/Tharm.css';
import { useState } from 'react';


export default function Tharm() {
      const [age, setAge] = useState(50);
    return (
        <div className='Tharm'> 
         <div className='janela'>
        <h3 className='head' type="text">Modulo Tharm</h3>
        <input className='solicitante'       
        type="text"
        placeholder="Solicitante">
        </input>
        <input className='paciente' type='text' placeholder='Paciente'></input>
    <div>
      <input
        type="number"
        min="0"
        max="120"
        step="1"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className='idade'
      />
      <p>Idade selecionada: {age}</p>
    </div>
             </div>    
    </div>
    );
}