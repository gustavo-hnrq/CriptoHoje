import axios from "axios";
import { useEffect, useState } from "react";
import { Fade } from 'react-awesome-reveal';

const Cartao = () => {

  const [data, setData] = useState([])
  
  // LINK DA API: https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=99

  // Explicando esse bloco abaixo, ele busca dados das criptomoedas em BRL da API CoinGecko quando o componente React é carregado e atualiza o estado do componente com esses dados. 
  // Ele também cuida de erros que possam ocorrer durante o processo e mostra os erros no console.
  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=99")
      .then(async(res) => {
        await setData(res.data)
      })
    .catch(err => console.log(err))
  }, [])

  // Renderiza uma grade de informações sobre as criptomoedas, incluindo seus nomes, preços atuais, imagens e variações de preço nas últimas 24 horas
  return(
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mr-10 ml-10">
      {/* O {data} contém objetos que representam diferentes criptomoedas e o map é utilizado
      para percorrer cada objeto e renderizar um bloco de informações para cada uma delas.*/}
      {data.map(element => (
        <div className="p-6 border border-zinc-600 rounded-lg shadow-xl hover:scale-105 hover:border-pink-500 duration-300">
          {/* O efeito de fade-in faz parte da biblioteca {react-awesome-reveal} que está
           com um atraso e sua direção será para cima. É aplicado a todos os elementos filhos.  */}
          <Fade delay={1e2} cascade damping={1e-1} direction='up'>
            <img src={element.image} className="w-8"/>
            <h5 className="mb-3 mt-2 text-2xl font-semibold text-white">{element.name}</h5>
            <p className="text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-blue-500 text-lg font-black">Preço atual: R$ {element.current_price}</p>
            <p className="text-white">Max 24h: R$ {element.high_24h} </p>
            <p className="text-white">Min 24h: R$ {element.low_24h} </p>
          </Fade>
        </div>
        ))}
    </div>
  );
}

export default Cartao