import React from 'react'
import {Link} from 'react-router-dom'   // element lets user nav to another page by clicking on a link

const Nav=props=>{
    return (
        <div className='nav'>
            <Link to='/'>
                <div>Home Page</div>
            </Link>
            <Link to='/stocks'>
                <div>Stocks</div>
            </Link>
            <Link to='/about'>
                <div>About</div>
            </Link>

        </div>
    )
}

export default Nav