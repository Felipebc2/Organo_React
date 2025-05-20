import './Team.css'
import Colab from '../Colab'

export const Team = (props) => {

    const secColor = { backgroundColor: props.corSecundaria }
    const h3Color = { borderColor: props.corPrimaria }

    return (
        (props.colabs.length > 0) && <section className='team' style={secColor}>
            <h3 style={h3Color}>{props.nome}</h3>
            <div className='colabs'>
                {props.colabs.map
                    ( colab => 
                        <Colab 
                        nome={colab.nome}
                        cargo={colab.cargo}
                        imagem={colab.imagem}
                />)}
            </div>
        </section>
    )
}