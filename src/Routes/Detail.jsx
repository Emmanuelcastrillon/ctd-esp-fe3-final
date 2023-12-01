import { useEffect } from 'react'
import { useContextGlobal } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom'
import axios from 'axios'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const params=useParams()
 
  const {state, dispatch}= useContextGlobal()
  
 
  const endpoint2=`https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(()=>{
    axios(endpoint2)
    .then(res=> dispatch({type:'get_odontologo', payload: res.data}))
  })
  



  return (
    <div className='dentist'>
      <h1 className='tituloDetail'>Detail Dentist Number {state.odontologo.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className='contenedorDentist'>
        <h2 className='dentisth2'>Name: <span>{state.odontologo.name}</span></h2>
        <h2 className='dentisth2'>Email: <span>{state.odontologo.email}</span></h2>
        <h2 className='dentisth2'>Phone: <span>{state.odontologo.phone}</span></h2>
        <h2 className='dentisth2'>WebSite: <span>{state.odontologo.website}</span></h2>
        
      </div>
    
    </div>
  )
}

export default Detail