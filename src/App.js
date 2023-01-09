import {Outlet} from 'react-router-dom' // used in the parent , route all the children elements
import Nav from './components/nav'
import './App.css';

function App() {
  return (
    <div className='App'>
      <Nav/>
      <Outlet/>
    </div>
  );
}

export default App;
