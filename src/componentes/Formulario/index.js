import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import BotaoFormulario from '../BotaoFormulario'

const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX & Design',
    'Mobile',
    'Inovação e Gestão'
]

const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Form submit')
}

function Formulario() {
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite seu nome' />
                <CampoTexto obrigatorio={true}  label='Cargo' placeholder='Digite seu cargo' />
                <CampoTexto label='Imagem' placeholder='Insira o endereço da sua imagem' />
                <ListaSuspensa label='Time' item={times}/>
                <BotaoFormulario texto='Criar Card'/>
            </form>
        </section>
    )
}

export default Formulario