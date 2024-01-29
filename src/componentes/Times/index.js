import Colaboradores from '../Colaboradores'
import './Times.css'

const Times = (props) => {
    return (
        props.colaboradores.length > 0 ? <section class="times" style={{backgroundColor:props.corFundo}}>
            <h3 style={{borderColor:props.corDestaque}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaboradores imagem={colaborador.imagem} nome={colaborador.nome} cargo={colaborador.cargo} />)}
            </div>
        </section>
        : ''
    )
}

export default Times