import React,{useState,useEffect} from 'react'
import  styled from 'styled-components'
import axios from 'axios'

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

    useEffect(() => {
        const fn = async()=>{
            await axios.get('http://localhost:4000/login')
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
            
        }
        
    },[])

    const onSubmit = async()=>{
        await axios.post('http://localhost:4000/login', {
                email: datos.email,
                password: datos.password,
            }).then(res =>{
                setDatos(res.data)
            })
            .catch(err =>{
                setDatos({})
            })
    }

    const Wrapper = styled.section`
        padding: 4em;
        background: papayawhip;
    `;

    /*const Button = styled.button`
        color: palevioletred;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
        `;*/

    return (
            <form className="row" onSubmit={onSubmit}>
                <div className="col-sm-4" ></div>
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
                    <button type="submit" className="btn ">Login</button>
                </div>
                
            </form>
    )
}

export default Login
