import React,{useState} from 'react'
import  styled from 'styled-components'

function Login() {

    const [datos, setDatos] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
    }
    const Wrapper = styled.section`
        padding: 4em;
        background: papayawhip;
    `;

    const Button = styled.button`
        color: palevioletred;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
        `;

    return (
        <Wrapper>
            <form className="row" onSubmit={enviarDatos}>
                <div class="col-sm-4" ></div>
                <div className="col-sm-4">
                            <input 
                                type="email" 
                                placeholder="email" 
                                className="form-control" 
                                onChange={handleInputChange} 
                                name="email" /><br/>
                            <input 
                                type="password" 
                                placeholder="password" 
                                className="form-control" 
                                onChange={handleInputChange} 
                                name="password" /><br/><hr/>
                            <Button type="submit" className="btn ">Enviar</Button>
                        </div>
                
            </form>
        </Wrapper>
    )
}

export default Login
