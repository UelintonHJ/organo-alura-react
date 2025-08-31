import './Formulario.css'
import CampoTexto from '../campo-texto'
import ListaSuspensa from '../lista-suspensa'
import BotaoFormulario from '../botao-formulario'
import { useState } from 'react'

function Formulario(props) {

const [nome, setNome] = useState('')
const [cargo, setCargo] = useState('')
const [imagem, setImagem] = useState('')
const [time, setTime] = useState('')

const aoSalvar = (evento) => {
    evento.preventDefault()
    const checkPngImageAddress = imagem.endsWith('.png') ? imagem : imagem + '.png'; 
    props.colaboradorCadastrado({
        nome,
        cargo,
        imagem : checkPngImageAddress,
        time
    });
    evento.target.reset();
}
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite seu nome' value={nome} aoAlterar={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label='Cargo' placeholder='Digite seu cargo' value={cargo} aoAlterar={valor => setCargo(valor)}/>
                <CampoTexto label='Imagem' placeholder='Insira o endereço do seu perfil do Github' value={imagem} aoAlterar={valor => setImagem(valor)}/>
                <ListaSuspensa label='Time' item={props.times} value={time} aoAlterar={valor => setTime(valor)}/>
                <BotaoFormulario texto='Criar Card' />
            </form>
        </section>
    )
}

export default Formulario