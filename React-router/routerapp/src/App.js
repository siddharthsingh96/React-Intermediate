import logo from './logo.svg';
import './App.css';
import { NavLink, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import MainHeader from './components/MainHeader';
import NOtFoundPage  from './components/NotFoundPage';
import Support from './components/Support';
import Labs from './components/Labs';
import { Link } from 'react-router-dom';

function App() {
  return (
   <div className='App'>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li><NavLink to="/support">Support</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/labs">Labs</NavLink></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<MainHeader/>}>
     {/* // Default ROute */}
      <Route index element={<Home/>}/>
      <Route path="/support" element={<Support/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/labs" element={<Labs/>}/>
      <Route path='*' element={<NOtFoundPage/>}/>
      </Route>
    </Routes>
   </div>
  );
}

export default App;
