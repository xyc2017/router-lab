import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Stocks from './pages/stocks'
import About from './pages/about'
import Home from './pages/home'
import Price from './pages/price'
import App from './App'



const router=createBrowserRouter(
    createRoutesFromElements(
        <Route 
            path='/' 
            element={<App/>}>
            <Route 
                path=''
                element={<Home/>}/>
            <Route
                path='stocks'
                element={<Stocks/>}/>
            <Route
                path='stocks/:symbol'
                element={<Price/>}
                //loader={priceLoader}
                />
            <Route
                path='about'
                element={<About/>}/>
            

        </Route>
    )
)

export default router