import './DropdownList.css'

export const DropdownList = (props) => {
    return(
        <div className="dropdown-list">
            <label>{props.label}</label>
            <select onChange={evento => props.onChange(evento.target.value)} required={props.obrigatorio} value={props.value}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
