import React ,{useEffect} from 'react'
import { Navbar,Nav ,Jumbotron,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'

function Inicio() {

  useEffect(() => {
    const fn = async()=>{
        await axios.get('http://localhost:4000/')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        
    }
    
},[])

    return (
        <div>        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Link className="navbar-brand" to="/">
                    Inicio
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Jumbotron fluid>
          <Container>
            <h1>Bienvenido</h1>
            <p>
              Esta es una página de inicio
            </p>
          </Container>
        </Jumbotron>

    </div>
    )
}

export default Inicio
