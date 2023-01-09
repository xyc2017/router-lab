import {Link} from 'react-router-dom'

const Stocks=(props)=>{
    const stocks=[
        {name: "Apple Inc.", symbol: "AAPL"},
        {name: "Microsoft Corporation", symbol: "MSFT"},
        {name: "Alphabet Inc.", symbol: "GOOGL"},
        {name: "Facebook, Inc.", symbol: "FB"},
        {name: "Oracle Corporation", symbol: "ORCL"},
        {name: "Intel Corporation", symbol: "INTL"},
      ]
      return (
        <div className="stocks">
            {stocks.map((stock)=>{
                const {name, symbol}=stock
                return (
                    <Link to={`/stocks/${symbol}`}>
                    <h2>{name}</h2>
                   
                    </Link>
                )
            })}
        </div>
      )
}

export default Stocks