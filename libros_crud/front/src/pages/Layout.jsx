// import useContext and contextProvider from react 
import { useState, createContext } from "react";
import './Layout.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


import {Routes, Route, Outlet, Link} from "react-router-dom";
import Navigation from '../components/Navigation';

export const AuthContext = createContext();
export const ThemeContext = createContext();

// plantilla de toda nuestra APP
function Layout(){

    const [theme, setTheme] = useState('light');

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log("isLoggedIn", isLoggedIn);
    // use useContext to set if its logged in or not
    //const {isLoggedIn} = useContext(AuthContext);  

    return (
      <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <AuthContext.Provider value={[isLoggedIn, setIsLoggedIn]}>

          <Navigation />
          <div className="content">
              {/* El <Outlet> renderiza el Child que provenga del router */}
              <Outlet />
          </div>
          <footer className="footer">
    <div className="social-icons">
        <a href="https://twitter.com" className="twitter-icon">
            <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://facebook.com" className="facebook-icon">
            <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://instagram.com" className="instagram-icon">
            <FontAwesomeIcon icon={faInstagram} />
        </a>
    </div>
</footer>
        </AuthContext.Provider>    
      </ThemeContext.Provider>    
      </>
    )
  }

  export default Layout;