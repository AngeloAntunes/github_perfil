import { useState, useEffect } from "react";

const Formulario = () => {
  const [materiaA, setMateriaA] = useState(0);
  const [materiaB, setMateriaB] = useState(0);
  const [materiaC, setMateriaC] = useState(0);
  const [nome, setNome] = useState('');

  const alteraNome = (evento) => {
    setNome(() => {
      return evento.target.value;
    })
  }

  const renderizaResultado = () => {
    const soma = materiaA + materiaB + materiaC;
    const media = soma / 3;

    if (media >= 7) {
      return (
        <p>Olá {nome}, você foi aprovado.</p>
      )
    } else {
      return (
        <p>Olá {nome}, você não foi aprovado.</p>
      )
    }
  }

  return (
    <form >
      <input type="text" placeholder="Digite seu nome" onChange={alteraNome} />
      <input type="number" placeholder="Nota da matéria A" onChange={event => setMateriaA(parseInt(event.target.value))} />
      <input type="number" placeholder="Nota da matéria B" onChange={event => setMateriaB(parseInt(event.target.value))} />
      <input type="number" placeholder="Nota da matéria C" onChange={event => setMateriaC(parseInt(event.target.value))} />
      {renderizaResultado()}
    </form>
  )
}

export default Formulario;