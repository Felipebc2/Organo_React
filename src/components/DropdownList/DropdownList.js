import './DropdownList.css'

export const DropdownList = (props) => {

    return(
        <div className="dropdown-list">
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
