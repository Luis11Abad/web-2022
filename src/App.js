//Styles
import './App.css';
//Components
import Nav from './components/Shared/Nav.js';
import Hero from './components/Home/Hero';
import Approach from './components/Home/Approach';
import Process from './components/Home/Process';

function App() {
  return (
    <div className='flex flex-col'>
      <header className='bg-light'>
        <Nav></Nav>
        <Hero/>
        <img src="/images/bg-ellipse.svg" alt="shape" className="w-full mt-16 2xl:mt-0"/>
      </header>
      <Approach/>
      <Process/>
    </div>
  );
}

export default App;
