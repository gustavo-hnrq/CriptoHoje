import './App.css';
import './components/cartao'
import Cartao from './components/cartao';


function App() {
  return (
    <div>
      <div className='text-center'>
        <h1 className='text-white font-black text-5xl mt-10'>Descubra os preços <br/> em tempo real das</h1>
        <h1 className='text-blue-500 font-bold text-5xl'>principais criptomoedas</h1>
        <p className='text-white text-1xl mt-5'>Acompanhe os preços e tendências das criptomoedas mais populares. <br /> Tome decisões com dados atualizados em tempo real</p>
      </div>
      <Cartao />
    </div>

    
  );
}

export default App;
