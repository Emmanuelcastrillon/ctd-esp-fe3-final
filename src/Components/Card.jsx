 import React, {useEffect,useState } from "react";
 import { Link } from "react-router-dom";
 import { useContextGlobal } from "./utils/global.context";
 import "../../src/index.css"
 import imageDentist from "../images/doctor.jpg"

 const Card = ({odontologo}) => {

 const {state,dispatch}=useContextGlobal() 
 //const [buttonColor, setButtonColor] = useState('')
 const [isFavorito, setIsFavorito] = useState(false);

 useEffect(() => {
  const estaEnFavoritos = state.favorites.some(favo => favo.id === odontologo.id);
  setIsFavorito(estaEnFavoritos);
}, [state.favorites, odontologo.id]);

   const addFav = ()=>{
      alert('Se ha agregado a favoritos el odontologo con id: ' + odontologo.id)
   // Aqui iria la logica para agregar la Card en el localStorage
        dispatch({type:'add_favorites',payload:odontologo})
        //setButtonColor('green');
        setIsFavorito(true)  
  }


 const removeFav = () => {
  const borrar=window.confirm('Desea eliminar de favoritos a ' + odontologo.name )
  if(borrar){
    const nuevosFavoritos = state.favorites.filter(favo => favo.id !== odontologo.id);
    localStorage.setItem('favorit', JSON.stringify(nuevosFavoritos));
    dispatch({ type: 'delete_favorites', payload: nuevosFavoritos })
  } 
};

  useEffect(() => {
    localStorage.setItem("favorit", JSON.stringify(state.favorites));
 }, [state.favorites]);
 

  return (
    <div className='card'>
        {/* En cada card deberan mostrar en name - username y el id */}    
        <Link to={'/Detail/' + odontologo.id}>
           <img className="imageDentist" src={imageDentist}alt="" />
           <h2 className="dataDentist">{odontologo.name}</h2>
           <h3 className="dataDentist">{odontologo.username}</h3>
           <h3 className="dataDentist">Id: <span>{odontologo.id}</span></h3>
         </Link>
         {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
         {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          {isFavorito ?  
          <button onClick={removeFav}  className="ButtonDeleteFav">🚮</button> : 
          <button onClick={addFav} className="favButton">⭐</button>}      
     </div>
   );
 };

export default Card;

