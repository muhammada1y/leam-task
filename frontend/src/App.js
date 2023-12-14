import './App.css';
import Nav from './components/nav.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer.js';
import About from './components/about.js';
import Home from './components/home.js';
import Contact from './components/contact.js';
function App() {
  
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route >
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>} />
           </Route>
        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
