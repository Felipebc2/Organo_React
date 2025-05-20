import TextField from '../TextField'
import DropdownList from '../DropdownList'
import Button from '../Button'
import './Form.css'

export const Form = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const saved = (event) => {
        event.preventDefault()
        console.log('Formulário enviado')
    } 

    return(
        <section className="form">
            <form onSubmit={saved}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField obrigatorio={true} label="Nome" placeholder="Digite o seu nome"/>
                <TextField obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo"/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
                <DropdownList obrigatorio={true} label="Time" itens={times}/>
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}