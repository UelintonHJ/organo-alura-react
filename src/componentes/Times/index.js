import './Times.css'

const Times = (props) => {
    return (
        <section class="times" style={{backgroundColor:props.corFundo}}>
            <h3 style={{borderColor:props.corDestaque}}>{props.nome}</h3>
        </section>
    )
}

export default Times