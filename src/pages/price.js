import { useParams } from 'react-router'
import data from '../data'

const Price=props=>{

    // access the url parameter using useParams hook from react-router-dom
    let {symbol}=useParams()
    console.log(symbol)
    // find the element from the data array that strictly equals the url parameter
    const stock=data.find(element=>{
        console.log(element.symbol)
        return element.symbol===symbol
    })
   // const share=data()
    return (
        <div>
            <h1>
                Name: 
                {stock.name}
            </h1>
            <h1>
                Symbol: 
                {stock.symbol}
            </h1>
            <h1>
                Price: 
                {stock.lastPrice}
            </h1>
        </div>
    )
}

export default Price