import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  
  const[estados,setEstados]=useState({
    fail:"",
    validacion:false,
    error:false,
    name:"",
    email:""
  })

  const handleSubmit=(e)=>{
    e.preventDefault()
    const expresionRegular= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if( estados.name ==="" && estados.email===""){
      setEstados((prevState) => ({
        ...prevState,
        validacion: false,
        error: true,
        fail: "Los campos estan vacios"
      }))
     
    }
    else if(estados.name.length<=5  || !isNaN(estados.name) || estados.name ===""){
      setEstados((prevState) => ({
        ...prevState,
        validacion: false,
        error: true,
        fail: "Por favor verifique el nombre",
      }))
    }
    else if( !expresionRegular.test(estados.email) ||  estados.email===""){
      setEstados((prevState) => ({
        ...prevState,
        validacion: false,
        error: true,
        fail: "Por favor verifique la direccion de correo electronico",
      }))
   }
    else{
      setEstados((prevState) => ({
        ...prevState,
        validacion: true,
        error: false,
      }))
    }
  }
  
  const handleOnchangeName=(e)=> setEstados((prevState) => ({ ...prevState, name: e.target.value.trimStart() }))
     
     
  const handleOnchangeEmail=(e)=> setEstados((prevState) => ({ ...prevState, email: e.target.value.trimStart() }))


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="inputName" placeholder="Nombre Min 6 caracteres" value={estados.name} onChange={handleOnchangeName}  />
        <input className="inputEmail" placeholder="Email" value={estados.email} onChange={handleOnchangeEmail}  />
        <button className="botonEnvio">Send</button>
      </form>

      {estados.validacion && <h2 className="mensajeContacto">Gracias {estados.name} te contactaremos al email {estados.email}</h2>}
      
      {estados.error && <h3 className="mensajeError">{estados.fail}</h3>}

    </div>
  );
};

export default Form;