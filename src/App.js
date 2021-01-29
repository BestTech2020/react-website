import React from 'react';
import Navbar from './Components/Navbar';
// import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import me from './Components/Pages/me';
import About from './Components/Pages/About';
import Services from './Components/Pages/Services';
import Programmes from './Components/Pages/Programmes';
import Contact from './Components/Pages/Contact';
import SignUp from './Components/Pages/SignUp';
import Footer from './Components/Footer';

// import Showcase from './Components/Showcase';
// import Cards from './Components/Cards';
// import Footer from './Components/Footer';




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact Component={me} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/programmes' component={Programmes} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}


export default App;
