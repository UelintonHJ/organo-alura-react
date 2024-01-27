import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Times from "./componentes/Times";

function App() {

  const times = [
    { 
      nome: 'Programação',
      corDestaque: '#57C278',
      corFundo: '#D9F7E9'
    },

    {
      nome: 'Front-End',
      corDestaque: '#82CFFA',
      corFundo: '#E8F8FF'
    },

    {
      nome: 'Data Science',
      corDestaque: '#A6D157',
      corFundo: '#E9FFE3'
    },

    {
      nome: 'DevOps',
      corDestaque: '#E06B69',
      corFundo: '#FDE7E8'
    },
      
    {
      nome: 'UX & Design',
      corDestaque: '#DB6EBF',
      corFundo: '#E8F8FF'
    },
    
    {
      nome: 'Mobile',
      corDestaque: '#FFBA05',
      corFundo: '#FFF5D9'
    },
    
    {
      nome: 'Inovação e Gestão',
      corDestaque: '#FF8A29',
      corFundo: '#FFEEDF'
    },
  ]
  
  const [colaboradores, setColaboradores] = useState([])

  const addColaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} colaboradorCadastrado={colaborador => addColaborador(colaborador)}/>
      {times.map(time => <Times key={time.nome} nome={time.nome} corDestaque={time.corDestaque} corFundo={time.corFundo} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} />)}
    </div>
  );
}

export default App;
