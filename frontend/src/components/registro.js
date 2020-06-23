import React, {Fragment, useState,useEffect} from 'react';
import axios from 'axios'

function Registro() {
    
    const [datos, setDatos] = useState({
        name: '',
        email: '',
        password:'',
        confirm_password:''
    })

    const handleInputChange = (event) => {
        console.log(event.target.name,event.target.value)
        setDatos({...datos,[event.target.name] : event.target.value})
        console.log(datos)
    }

    useEffect(() => {
        const fn = async()=>{
            await axios.get('http://localhost:4000/resgistro')
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
            
        }
        
    },[])

    const onSubmit = async()=>{
        await axios.post('http://localhost:4000/registro', {
                name: datos.name,
                email: datos.email,
                password: datos.password,
                confirm_password: datos.confirm_password
            }).then(res =>{
                setDatos(res.data)
            })
            .catch(err =>{
                setDatos({})
            })
    }
    
    
    
    return (
        <Fragment>
            
            <form className="row" onSubmit={onSubmit}>
                <div className="col-sm-8" ></div>
                <div className="col-sm-4">
                    <h1>Registro</h1>
                    <input type="text" placeholder="usuario" className="form-control"  name="name" onChange={handleInputChange}></input><br/>
                    <input type="email" placeholder="email" className="form-control"  name="email" onChange={handleInputChange}></input><br/>
                    <input type="password" placeholder="password" className="form-control"  name="password" onChange={handleInputChange}></input><br/>
                    <input type="password" placeholder="confirm_password" className="form-control"  name="confirm_password" onChange={handleInputChange}></input><br/>
                    <hr/>
                    <button type="submit" className="btn btn-dark" >Enviar</button>
                </div>
                
            </form>
        </Fragment>
    )
}

export default Registro