import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'

import classes from './MainNavigation.module.scss'

export default function MainNavigation() {
  return (
    <Navbar key={'lg'} expand={'lg'} className={classes['main-navigation']}>
      <Container fluid="xl">
        <Navbar.Brand href="#">Twoja Firma</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'lg'}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${'lg'}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${'lg'}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'lg'}`}>
              Nawigacja
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavDropdown
                title="Oferta"
                id={`offcanvasNavbarDropdown-expand-${'lg'}`}
              >
                <NavDropdown.Item href="#action3">
                  Oferujemy to
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Oferujemy to
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action1">O firmie</Nav.Link>
              <Nav.Link href="#action2">Realizacje</Nav.Link>
              <Nav.Link href="#action2">Kontakt</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}
