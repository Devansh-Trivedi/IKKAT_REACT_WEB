import React from 'react';
import {BrowserRouter,Route,Link,Redirect} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Home from './Home';
function Header(){
    const openMenu=()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = ()=>{
    document.querySelector(".sidebar").classList.remove("open");
  }
    return(
       
        
         <div id="header-2">
        
        <header>
        <div className="about-container">
        <div className="container">
            <input type="checkbox" name="" id="check" />
            
            
            <div className="logo-container">
            
            <div className="sidebar-logo">
             <button onClick={openMenu}>
                 &#9776;
            </button>
          </div>
          <Link to="/"> <h3 className="logo">MIRROR</h3></Link>
                
            </div>
            

                   
                   




           
            

            <div className="nav-btn">
                <div className="nav-links">
                    <ul>
                        <li className="nav-link active">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-link" >
                            <a  href="#">About</a>
                        </li>
                        <li className="nav-link">
                            <a href="#">Trending</a>
                        </li>
                        <li className="nav-link">
                            <a href="#">Customize</a>
                        </li>
                        <li className="nav-link">
                            <a href="/shop">Shop</a>
                        </li>

                        <li className="nav-link">
                            <a href="#">Account<i className="fas fa-caret-down"></i></a>
                            <div className="dropdown">
                                <ul>
                                    <li className="dropdown-link">
                                        <a href="#">My Account</a>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">My Order</a>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Settings</a>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">LogOut</a>
                                    </li>
                                    <div className="arrow"></div>
                                </ul>
                            </div>
                        </li>
                    </ul>
                      
                
      
                   
   
                </div>

                <div className="log-sign">
                    

            <div className="searchBox">

            <input className="searchInput"type="text" name="" placeholder="Search" />
            <button className="searchButton" href="#">
                <i className="fa fa-search">
                   
                </i>
            </button>
        </div>

        <a href="#" className="fa fa-bell" ></a>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#" className="fa fa-heart">
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#" className="fa fa-shopping-cart">
                </a>
                </div>
            </div>

            <div className="hamburger-menu-container">
                <div className="hamburger-menu">
                    <div></div>
                </div>
            </div>
            </div>
            </div>    
    </header>
   
     <br />
     </div>
       







    );
    }
export default Header;