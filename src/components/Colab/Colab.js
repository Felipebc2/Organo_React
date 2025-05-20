import './Colab.css'

export const Colab = ({ nome, imagem, cargo}) => {
    return (<div className='colab'>
        <div className='header'>
            <div>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='footerColab'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    </div>)
}