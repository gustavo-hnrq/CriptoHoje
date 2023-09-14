import axios from "axios";
import { useEffect, useState } from "react";

const Cartao = () => {

  const [data, setData] = useState([])

  // https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=99
  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=99")
      .then(async(res) => {
        await setData(res.data)
      })
    .catch(err => console.log(err))
  }, [])

  return(
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mr-10 ml-10">
      {data.map(element => (
        <div className="p-6 border border-zinc-600 rounded-lg shadow-">
          <img src={element.image}
          className="w-8"
          />
          <h5 className="mb-3 mt-2 text-2xl font-semibold text-white">{element.name}</h5>
          <p className="text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500 text-lg font-black">Preço atual: R$ {element.current_price}</p>
          <p className="text-white">Max 24h: R$ {element.high_24h} </p>
          <p className="text-white">Min 24h: R$ {element.low_24h} </p>
        </div>
        ))}
    </div>

  );

}


export default Cartao