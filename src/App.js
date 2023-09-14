import './App.css';
import './components/cartao'
import Cartao from './components/cartao';
import { TypeAnimation } from 'react-type-animation';


function App() {
  return (
    <div>
      <div className='text-center mb-8'>
        <h1 className='text-white font-black text-7xl mt-28'>Descubra os preços <br/> em tempo real das</h1>
        <h1 className='text-white font-black text-7xl mb-2'>principais criptomoedas</h1>
        <TypeAnimation className='text-7xl text-blue-500 font-bold mt-10 text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500'
        sequence={[
          "Bitcoin",
          2500,
          "Ethereum",
          2500,
          "USD Coin", 
          2500,
          "Litecoin",
          2500,
          "Tether",
          2500,
          "BNB", 
          2500,
          "Dogecoin",
          2500,
          "XRP",
          2500, 
          "Solana",
          2500,
          "Shiba Inu",
          2500
        ]}
        speed={1}
        deletionSpeed={1}
        repeat={Infinity}
        />
        <p className='text-white text-2xl leading-6 mt-5'>Acompanhe os preços e tendências das criptomoedas mais populares. <br /> Tome decisões com dados atualizados em tempo real.</p>
      </div>
      <Cartao />
    </div>

    
  );
}

export default App;
