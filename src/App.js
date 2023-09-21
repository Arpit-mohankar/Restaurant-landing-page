
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
function App() {
  return (
    <div className="home-container">
  <Home/>
  <About/>
  <Work/>
  <Testimonials/>
  <Contacts/>
  <Footer/>
    </div>
  );
}

export default App;
