import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Times from "./componentes/Times";

function App() {
  
  const [colaboradores, setColaboradores] = useState([])

  const addColaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario colaboradorCadastrado={colaborador => addColaborador(colaborador)}/>
      <Times nome="Programação"/>
      <Times nome="Front-End"/>
      <Times nome="Data Science"/>
      <Times nome="DevOps"/>
      <Times nome="UX & Design"/>
      <Times nome="Mobile"/>
      <Times nome="Inovação e Gestão"/>
    </div>
  );
}

export default App;
