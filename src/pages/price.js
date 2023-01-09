import {useLoaderData} from 'react-router-dom'
import data from '../data'

const Price=props=>{
    const share=data()
    return (
        <div>
            <h1>
                {share.lastPrice}
            </h1>
        </div>
    )
}

export default Price