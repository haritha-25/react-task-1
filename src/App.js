import './App.css';
import Card1 from './card1.js';
import Card2 from './card2.js';
import Card3 from './card3.js';

function App() {
  return (
    <div className="App p-3">
    <div className="container d-flex justify-content-center gap-4 flex-wrap flex-row p-3 bg-color">
    <Card1 />
    <Card2 />
    <Card3 />
    </div>
  </div>
);
    
}

export default App;
