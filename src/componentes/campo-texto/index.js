import './CampoTexto.css'

const CampoTexto = (props) => {
    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value)
}
    return (
        <div className="campoTexto" key={props.label}>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder}></input>
            <option value=""></option>
        </div>
    ) 
}

export default CampoTexto