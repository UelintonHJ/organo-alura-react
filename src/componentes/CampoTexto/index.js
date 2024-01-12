import './CampoTexto.css'

const CampoTexto = (props) => {
    let valor = 'Uelinton Janke'
    return (
        <div className="campoTexto">
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    ) 
}

const aoDigitar = (evento) => {
    let valor = evento.target.value
    console.log(valor)
}

export default CampoTexto