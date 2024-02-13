
export const CampoTexto = (props) => {

    const placeholdermodificado = `${props.placeholder}...`

    let aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholdermodificado}/>
        </div>

      )
}

