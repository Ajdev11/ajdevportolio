import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/About';
import Service from './components/Service';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Portfolio />
      <NavBar />
      <About />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
