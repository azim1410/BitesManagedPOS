import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Inventory from '../pages/Inventory';
import Orders from '../pages/Orders';
import Analytics from '../pages/Analytics';

const AppRoute = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/inventory' element={<Inventory />}/>
            <Route path='/orders' element={<Orders />}/>
            <Route path='/analytics' element={<Analytics />}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRoute