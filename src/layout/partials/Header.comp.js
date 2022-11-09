import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import ticket from "../../assets/img/ticket.png";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../../api/userApi";


export const Header = () => {
 const navigate = useNavigate();
    const logMeOut = () => {
      sessionStorage.removeItem("accessJWT");
      localStorage.removeItem("queryresSite");
      userLogout();
      navigate("/");
      };
       
      return (
        <Navbar collapseOnSelect bg="success"
        text="danger" expand="md">
        <Navbar.Brand>
         <img src={ticket} alt="ticket" width="50px" />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
           <LinkContainer to="/dashboard">
            <Nav.Link >Dashboard</Nav.Link>
            </LinkContainer>
           <LinkContainer to="/tickets">
            <Nav.Link>Tickets</Nav.Link>
           </LinkContainer>
          
           
           
          <Nav.Link onClick={logMeOut}>Logout</Nav.Link> 
        </Nav>
         </Navbar.Collapse>
         </Navbar>
         );
};