import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import { Footer } from './components/Footer/Footer';

function App() {

  const [colabs, setColabs] = useState([])

  const teams = [{
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const onNewColabAdd = (colab) => {
    setColabs([...colabs, colab])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.nome)} onNewColabAdd={colab => onNewColabAdd(colab)}/>
      {teams.map (team => <Team 
            key={team.nome} 
            nome={team.nome}
            corPrimaria={team.corPrimaria}
            corSecundaria={team.corSecundaria}
            colabs={colabs.filter(colab => colab.team === team.nome)}
      />)}
      <Footer />
    </div>
  );
}

export default App;