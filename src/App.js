import logo from './logo.svg';
import './App.css';
import Navabar from './component/navbar/Navabar';
import Hero from './component/Hero/Hero';
import GoodAt from './component/GoodAT/GoodAt';
import Projects from './component/Projects/Projects';
import Contact from './component/Contact/Contact';

function App() {
  return (
    <div className="">
      <Navabar/>
      <Hero/>
      <GoodAt/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
