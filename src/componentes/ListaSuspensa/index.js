import './ListaSuspensa.css'

function ListaSuspensa(props) {
    return (
        <div className='listaSuspensa'>
            <label>{props.label}</label>
            <select>{props.item.map(item => <option key={item}>{item}</option>)}</select>
        </div>
    )
}

export default ListaSuspensa