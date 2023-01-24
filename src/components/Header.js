import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
     <Navbar bg="primary" expand="lg" variant='dark' collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">DashioFolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  style={{ marginLeft : 'auto'}}>
            <Nav.Link href="/connexion"> <i className="fa-solid fa-user"></i>CONNECION</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header