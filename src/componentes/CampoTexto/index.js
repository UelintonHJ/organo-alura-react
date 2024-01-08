import './CampoTexto.css'

function CampoTexto(props) {
    return (
        <div className="campoTexto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto