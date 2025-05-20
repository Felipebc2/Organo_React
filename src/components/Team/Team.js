import './Team.css'

export const Team = (props) => {

    const secColor = { backgroundColor: props.corSecundaria }
    const h3Color = { borderColor: props.corPrimaria }

    return (
        <section className='team' style={secColor}>
            <h3 style={h3Color}>{props.nome}</h3>
        </section>
    )
}