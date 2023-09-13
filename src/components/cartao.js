import axios from "axios";
import { useEffect, useState } from "react";

const Cartao = () => {

  const [data, setData] = useState([])

  // /v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=6
  useEffect(() => {
    axios.get("https://api.coingecko.com/api")
      .then(async(res) => {
        await setData(res.data)
      })
    .catch(err => console.log(err))
  }, [])

  return(
    <div>
      {data.map(element => (
        <div>
          <img src={element.image}
          className="w-10"
          />
          <h5 className="mb-1 text-2xl font-semibold tracking-tight text-white">{element.name}</h5>
          <p>Preço atual: R${element.current_price}</p>
        </div>
        ))}
    </div>

  );

}


export default Cartao