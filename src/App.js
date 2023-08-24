
import './App.css';
import Body from './components/Body/Body';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import LoaderPage from './components/LoaderPage/LoaderPage';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import InvestmentPlans from './components/InvestmentPlans/InvestmentPlans';
import Partners from './components/Partners/Partners';
import Resources from './components/Resources/Resources';
import Footer from './components/Footer/Footer';
import SignUp from './components/SignUp/Signup'
import SignIn from './components/SignIn/SignIn';

function App() {
  const [popUp, setPopUp] = useState({
    login:false,
    singup:false,
});

const {login, signup} = popUp;

const openSignUpPopUp = () => {
  setPopUp({
    signup: true,
    login: false,
  });
};

const openSignInPopUp = () => {
  setPopUp({
    signup: false,
    login: true,
  });
}

const closePopUp = () => setPopUp({
  singup: false,
  login: false,
});

  
  return (
    <div className="app">
     
        <>
        <Navbar openSignInPopUp={openSignInPopUp} openSignUpPopUp={openSignUpPopUp}/>
        {login && <SignIn closePopUp={closePopUp} openSignUpPopUp={openSignUpPopUp} />}
        {signup && <SignUp closePopUp={closePopUp} openSignInPopUp={openSignInPopUp} />}
        <Header/> 
        <Container/>
        <Body/> 
        <InvestmentPlans/>
        <Partners/>
        <Resources/>
        <Footer/>
        </>
        
        
    </div>
  );
}

export default App;
