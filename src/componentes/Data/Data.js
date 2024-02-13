export const Data = (props) => {

    let aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div>
            <label>
                {props.label}
            </label>
            <input type="date" value={props.valor} onChange={aoDigitado} required={props.obrigatorio}></input>
        </div>
    )
}