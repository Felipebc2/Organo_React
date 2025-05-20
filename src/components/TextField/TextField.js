import './TextField.css'

export const TextField = (props) => {

    const Modifiedplaceholder = `${props.placeholder}...`

    const onType = (event) => {
        props.onChange(event.target.value)
    }

    return (
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={onType} required={props.obrigatorio} placeholder={Modifiedplaceholder}/>
        </div>
    )
}

export default TextField;