import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'

const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX & Design',
    'Mobile',
    'Inovação e Gestão'
]

function Formulario() {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto label='Nome' placeholder='Digite seu nome' />
                <CampoTexto label='Cargo' placeholder='Digite seu cargo' />
                <CampoTexto label='Imagem' placeholder='Insira o endereço da sua imagem' />
                <ListaSuspensa label='Time' item={times}/>
            </form>
        </section>
    )
}

export default Formulario