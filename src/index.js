import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import About from './components/Pages/About/About';
import Services from './components/Pages/Services/Services';
import Investment from './components/Pages/Investment/Investment';
import Contact from './components/Pages/Contact/Contact';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import Resource from './components/Pages/Resource/Resource';
// import ContactUs from './Pages/Contact/ContactUs';
// import Home from './Pages/Home';
// import About from './Pages/About/About';
// import Services from './Pages/Services/Services';
// import Investment from './Pages/Advertise/A';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"home",
    element:<Home/>,
  },
  {
    path:"about",
    element:<About/>,
  },
  {
    path:"services",
    element:<Services/>,
  },
  {
    path:"investment",
    element: <Investment/>,
  },
  {
    path:"contact",
    element:<Contact/>
  },
  {
    path:"login",
    element:<Login/>,
  },
  {
    path:"register",
    element:<Register/>
  },
  {
    path:'resource',
    element:<Resource/>


  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
reportWebVitals();




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();






