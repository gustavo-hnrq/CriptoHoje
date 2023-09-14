import './App.css';
import Cartao from './components/cartao';
import { TypeAnimation } from 'react-type-animation';
import { Fade } from 'react-awesome-reveal';


function App() {
  return (
    <div>
      <Fade delay={1e2} cascade damping={1e-1} direction='down'>
        <div className='text-center mb-8'>
          <h1 className='text-white font-black text-7xl mt-10 ml-5 mr-5 mb-1 antialiased'>Descubra os preços <br />das principais criptomoedas</h1>
          <TypeAnimation className='ml-5 mr-5 text-7xl text-blue-500 font-bold mt-10 text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-blue-500'
          sequence={[
          "Bitcoin",
          3000,
          "Ethereum",
          3000,
          "USD Coin", 
          3000,
          "Litecoin",
          3000,
          "Tether",
          3000,
          "BNB", 
          3000,
          "Polygon",
          3000,
          "XRP",
          3000, 
          "Solana",
          3000,
          "Shiba Inu",
          3000
          ]}
          speed={1}
          deletionSpeed={1}
          repeat={Infinity}
        />
        <p className='text-white text-2xl leading-6 mt-5 antialiased'>Acompanhe os preços e tendências das criptomoedas mais populares.</p>
      </div>
      </Fade>
      <Cartao />
      <a href='https://github.com/henzy0/CriptoHoje/' target='_blank' className='flex justify-center m-5 font-black text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-blue-500'>Feito por Gustavo</a>
    </div>
  
    
  );
}

export default App;
