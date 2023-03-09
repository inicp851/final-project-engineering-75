import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/beranda">JOURNAL LINK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/beranda" className="d-flex align-items-center">Beranda</Nav.Link>
            <Nav.Link href="/notifikasi" className="d-flex align-items-center">Notifikasi</Nav.Link>
            <Nav.Link href="/akun">
              <Button variant="danger" size="sm">Keluar</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
