import './ListaSuspensa.css'

function ListaSuspensa(props) {
    return (
        <div className='listaSuspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterar(evento.target.value)} value={props.valor}>{props.item.map(item => <option key={item}>{item}</option>)}</select>
        </div>
    )
}

export default ListaSuspensa