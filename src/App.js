import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [colabs, setColabs] = useState([])

  const onNewColabAdd = (colab) => {
    console.log(colab)
    setColabs([...colabs, colab])
  }

  return (
    <div className="App">
      <Banner />
      <Form onNewColabAdd={colab => onNewColabAdd(colab)}/>
    </div>
  );
}

export default App;