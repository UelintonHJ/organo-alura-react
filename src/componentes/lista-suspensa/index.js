import './ListaSuspensa.css'

function ListaSuspensa(props) {
    return (
        <div className='listaSuspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterar(evento.target.value)} value={props.valor}>
                <option value=""></option>
                {props.item.map(item => {
                   return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa