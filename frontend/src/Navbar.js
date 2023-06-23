import React, { useContext, useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import logo from './logo.png';
import { Link, NavLink, useNavigate,useLocation } from 'react-router-dom';
import "./navbar.css"
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from './AuthContext';


const CustomNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
 
  const { authToken, setAuthToken } = useContext(AuthContext);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    setAuthToken(null);
    navigate('/');
  };

  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }

  return (
    <Navbar style={{backgroundColor:"#40E0D0", display: 'flex', justifyContent: 'space-between'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <NavbarBrand tag={Link} to="/">
            <img src={logo} alt="Logo" height="50" style={{marginLeft:"1.2rem"}} />
          </NavbarBrand>
          <NavLink tag={Link} to="/" className="nav-link" style={{marginLeft:"2rem", color:"black ", fontSize:"18px"}}>
            Home
          </NavLink>
          {authToken && (
            <NavLink tag={Link} to="/todo" className="nav-link" style={{marginLeft:"2rem", color:"black ", fontSize:"18px"}}>
              ToDo
            </NavLink>
          )}
        </div>

        <Nav className="ml-auto" navbar>
          <div className="d-flex">
            <NavItem>
              {authToken 
                ? (
                  <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                    <DropdownToggle>
                      <FaUserAlt style={{width:"10px !important", color:"white", marginLeft:"1.5rem"}} />
                    </DropdownToggle>
                    <DropdownMenu>
        
                      <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                )
                : (
                  <>
                    <Button color="secondary" tag={Link} to="/login">Log In</Button>
                    <Button color="secondary" tag={Link} to="/signup" style={{marginLeft:"0.5rem"}}>Signup</Button>
                  </>
                )
              }
            </NavItem>
          </div>
        </Nav>
    </Navbar>
  );
}

export default CustomNavbar;
