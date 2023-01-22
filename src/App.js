import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fragment } from 'react';


function App() {
  const sections = [
    {id:1, name:"Home" , Id:"#home"},
    {id:2, name:"About" , Id:"#about"},
    {id:3, name:"Resume" , Id:"#resume"},
    {id:4, name:"Portfolio" , Id:"#portfolio"},
    {id:5, name:"Contact Me" , Id:"#contact"}
  ];
  return (
    <Fragment>
    <ToastContainer/>
      <Header sections={sections}/>
      <Home/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </Fragment>
  );
}

export default App;
