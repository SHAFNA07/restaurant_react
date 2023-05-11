import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header() {
  return(
    
<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./newww.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            CandleNuts
          </Navbar.Brand>
        </Container>
      </Navbar>
      
  ) 

}

export default Header;