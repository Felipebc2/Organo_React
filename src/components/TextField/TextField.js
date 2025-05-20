import './TextField.css'

export const TextField = (props) => {

    const Modifiedplaceholder = `${props.placeholder}...`

    return (
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input required={props.obrigatorio} placeholder={Modifiedplaceholder}/>
        </div>
    )
}

export default TextField;