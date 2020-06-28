import React ,{useState,useEffect} from 'react'
import io from 'socket.io-client'
import { Navbar,Nav ,Jumbotron,Container,Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'

//haciendo la conexion del socket
const socket = io.connect('http://localhost:4000')

function Inicio(props) {

  const [user,setUSer] = useState({})

  //estado que contendra el mensaje y quien lo envio
  const [state, setState] = useState({message: '', name: ''})

  //donde contendra el conjunto de mensajes
  const [chat,setChat] = useState([])

  useEffect(() => {

    socket.on('message', ({name, message}) => {
      setChat([...chat, {name,message}])
    })
  })

  //evento para obtener los valores y guardarlos en el objeto
  const onTextChange = e => {
    setState({...state, [e.target.name] : e.target.value})
  }

  //evento que se ejecutará al enviar
  const onMessageSubmit = e => {
    e.preventDefault()
    const {name,message} = state
    socket.emit('message', {name,message})
    setState({message:'',name})
    
  }


  const renderChat = () => {
    //hace un mapeo para los mensajes 
    return chat.map(({name, message}, index) => (
      <div key={index}>
        <h3>
          {name} : <span>{message}</span>
        </h3>
      </div>
    ))
  }
  

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
        <Jumbotron >
          <Container>
            <h1>Bienvenido</h1>
            <p>
              Esta es una página de inicio
            </p>
          </Container>
        </Jumbotron>
        <Card border="secondary" style={{ width: '36rem' }} >
        <Card.Header as="h5" height='450px'>Chat</Card.Header>
          <Card.Body>
            <Card.Text className="Scroll">
            {renderChat()}
            </Card.Text>  
          </Card.Body>
          <form onSubmit={onMessageSubmit}>
          <input 
            required 
            type="text" 
            placeholder="message" 
            className="form-control"  
            name="message"
            onChange={e => onTextChange(e)}
          />
          <button type="submit" className="btn btn-dark" >Enviar</button>
          </form>
        </Card>

    </div>
    )
}

export default Inicio
