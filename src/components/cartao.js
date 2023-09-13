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
    <div className="grid grid-cols-3 gap-y-5 gap-x-5 p-10 ml-72 mr-72 ">
      {data.map(element => (
        <div className=" block grid-cols-3 max-w-screen-sm p-6 border border-zinc-600 rounded-lg">
          <img src={element.image}
          className="w-8"
          />
          <h5 className="flex mb-1 text-2xl font-medium tracking-tight text-white">{element.name}</h5>
          <h5 className="flex mb-2 text-white">Preço atual: R${element.current_price}</h5>
        </div>
        ))}
    </div>

  );

}


export default Cartao