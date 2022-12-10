import logo from './logo.svg';
import './App.css';
import Navabar from './component/navbar/Navabar';
import Hero from './component/Hero/Hero';
import GoodAt from './component/GoodAT/GoodAt';
import Projects from './component/Projects/Projects';

function App() {
  return (
    <div className="">
      <Navabar/>
      <Hero/>
      <GoodAt/>
      <Projects/>
    </div>
  );
}

export default App;
