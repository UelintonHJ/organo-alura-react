import Banner from "./componentes/Banner";
import CampoTexto from "./componentes/CampoTexto";

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label='Nome' placeholder='Digite seu nome'/>
      <CampoTexto label='Cargo' placeholder='Digite seu cargo'/>
      <CampoTexto label='Imagem' placeholder='Insira o endereço da sua imagem'/>
    </div>
  );
}

export default App;
