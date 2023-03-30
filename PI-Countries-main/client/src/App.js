import './App.css';
import Nav from '../src/components/Nav/Nav.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/components/Home/Home';
import CountryDetail from '../src/components/CountryDetail/CountryDetail';
import CreateActivity from './components/CreateActivity/CreateActivity';
import Contact from "./components/Contact/Contact.jsx";
import About from "./components/About/About.jsx";
import Test from './components/Test';
import Favorites from './components/Favorites/Favorites';
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/countries/detail/:idPais' element={<CountryDetail />} />
        <Route path='/activity/create' element={<CreateActivity />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/out/test' element={<Test />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>

    </div>
  );
}

export default App;
