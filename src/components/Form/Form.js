import TextField from '../TextField'
import DropdownList from '../DropdownList'
import Button from '../Button'
import './Form.css'
import { useState } from 'react'

export const Form = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [team, setTeam] = useState('')

    const saved = (event) => {
        event.preventDefault()
        props.onNewColabAdd({
            nome,
            cargo,
            imagem,
            team
        })  
    } 

    return(
        <section className="form">
            <form onSubmit={saved}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o seu nome"
                    valor={nome}
                    onChange={valor => setNome(valor)}
                />
                <TextField 
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    onChange={valor => setCargo(valor)}
                />
                <TextField 
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    onChange={valor => setImagem(valor)}
                />
                <DropdownList 
                    obrigatorio={true}
                    label="Time"
                    itens={props.teams}
                    valor={team}
                    onChange={valor => setTeam(valor)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}