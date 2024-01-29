import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import BotaoFormulario from '../BotaoFormulario'
import { useState } from 'react'

function Formulario(props) {

const [nome, setNome] = useState('')
const [cargo, setCargo] = useState('')
const [imagem, setImagem] = useState('')
const [time, setTime] = useState('')

const aoSalvar = (evento) => {
    evento.preventDefault()
    props.colaboradorCadastrado({
        nome,
        cargo,
        imagem,
        time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
}
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite seu nome' value={nome} aoAlterar={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label='Cargo' placeholder='Digite seu cargo' value={cargo} aoAlterar={valor => setCargo(valor)}/>
                <CampoTexto label='Imagem' placeholder='Insira o endereço da sua imagem' value={imagem} aoAlterar={valor => setImagem(valor)}/>
                <ListaSuspensa label='Time' item={props.times} value={time} aoAlterar={valor => setTime(valor)}/>
                <BotaoFormulario texto='Criar Card' />
            </form>
        </section>
    )
}

export default Formulario