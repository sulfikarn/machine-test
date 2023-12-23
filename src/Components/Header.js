import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header({ onFilter }) {
    
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand className='title'>Countries</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className='me-auto'></Nav >
                    
                    <Nav >
                        <Nav.Link onClick={() => onFilter('all')} className='active-nav'>All</Nav.Link>
                        <Nav.Link onClick={() => onFilter('Asia')}> Asia</Nav.Link>
                        <Nav.Link onClick={() => onFilter('Europe')}>Europe</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header