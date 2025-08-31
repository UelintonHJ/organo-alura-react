import './BotaoFormulario.css'

function BotaoFormulario(props) {
    return (
        <button className='button'>{props.texto}</button>
    )
}

export default BotaoFormulario