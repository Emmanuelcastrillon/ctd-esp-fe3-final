import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state}=useContextGlobal()


         
  return (
    <div className="paginaFavoritos">
      <h1 className="tituloFavs">Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
         {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favorites.length>0 && state.favorites.map((favo)=>
            <Card odontologo={favo} key={favo.id}/>
        )}
       
      </div>
    </div>
  );
};

export default Favs;


//onClick={()=>deleteFavs(favo.id)}