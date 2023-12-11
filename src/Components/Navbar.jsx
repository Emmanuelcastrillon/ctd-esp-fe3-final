import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch}=useContextGlobal()
 

 const handleOnclick=()=>{
  const newTheme = state.theme === 'dark' ? 'light' : 'dark';
  dispatch({ type: 'change_style', payload: newTheme });
 
   }
   
  
  return (
    <div className='header'>
      <h3 className='tituloHeader'>DH-ODONTO</h3>
      <nav className='navegador'>
          {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
          <Link className='linkNavbar' to='/'>Home</Link>
          <Link className='linkNavbar' to='/Contacto'>Contact</Link>
          <Link className='linkNavbar' to='/favoritos'>Favs</Link>
    
           {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
         
      </nav>
      {state.theme==='dark' ?  <button className='botonTema' onClick={handleOnclick}>☀️</button>: <button className='botonTema' onClick={handleOnclick}>🌜</button>}

      <div className='lineaNavbar'></div>
     
       
    </div>
  )
}

export default Navbar