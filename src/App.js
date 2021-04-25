import logo from './logo.svg';
import './App.css';
import { Machine } from 'xstate';
import { useMachine } from '@xstate/react'

const gameMachine = Machine({
    id: 'super-trunfo',
    initial: 'start',
    states: {
        start: {
            
        }
    }
}, {
    actions: {
      /* ... */
    },
    activities: {
      /* ... */
    },
    delays: {
      /* ... */
    },
    guards: {
      /* ... */
    },
    services: {
      /* ... */
    }
})

  const newGame = {
    players: [
        {name: 'Rafael',  cards: [], points: 0},
        {name: 'Diogo',   cards: [], points: 0},
        {name: 'Juliana', cards: [], points: 0},
        {name: 'Roberta', cards: [], points: 0},
    ],
    deck: {
        values: [
            {name: 'Velocidade máxima [Km/h]', sign: 1},
            {name: 'Peso [Kg]', sign: 0},
            {name: 'Aceleração 0-100Km/h [s]', sign: 0},
            {name: 'Luxo', sign: 1, map: ['Básico', 'Família', 'Esportivo', 'Luxo']},
            {name: 'Valor [R$]', sign: 1},
            {name: 'Espaço interno', sign: 1, map: ['Apertado', 'Pequeno', 'Médio', 'Grande', 'Muito espaçoso']},
        ], 
        cards: [
        {name: 'Ferrari',  image: 'https://picsum.photos/200', values: [300, 2100,  2.5, 2, 1500000, 2]},
        {name: 'Audi',     image: 'https://picsum.photos/200', values: [240, 1600,  6.0, 3,  180000, 3]},
        {name: 'BMW',      image: 'https://picsum.photos/200', values: [250, 1500,  5.5, 3,  250000, 3]},
        {name: 'VW',       image: 'https://picsum.photos/200', values: [200, 1400,  6.5, 1,   90000, 4]},
        {name: 'Fiat',     image: 'https://picsum.photos/200', values: [180, 1100,  8.5, 0,   50000, 0]},
        {name: 'Ford',     image: 'https://picsum.photos/200', values: [210, 1400,  7.5, 1,  120000, 2]},
        {name: 'GM',       image: 'https://picsum.photos/200', values: [180, 1300,  7.5, 0,  100000, 1]},
        {name: 'Mustang',  image: 'https://picsum.photos/200', values: [270, 1900,  3.5, 2,  700000, 2]},
        {name: 'Corvette', image: 'https://picsum.photos/200', values: [290, 1800,  4.0, 2, 1000000, 1]},
        {name: 'Peugeot',  image: 'https://picsum.photos/200', values: [170, 1300,  8.0, 0,   50000, 0]},
        {name: 'Renault',  image: 'https://picsum.photos/200', values: [190, 1400,  8.5, 0,   60000, 1]},
        {name: 'Jeep',     image: 'https://picsum.photos/200', values: [150, 1800, 10.0, 0,   80000, 2]},
    ]}
  }


function App() {
  const [current, send] = useMachine(gameMachine, {context: newGame})
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
