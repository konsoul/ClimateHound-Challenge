import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function Header({ buttonOneCount, buttonTwoCount }) {
  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Climate Hound Challenge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Button 1 = {buttonOneCount}</Nav.Link>
            <Nav.Link href="#link">Button 2 = {buttonTwoCount}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
