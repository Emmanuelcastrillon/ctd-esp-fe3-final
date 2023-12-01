import { createContext,useContext,useEffect } from "react";
import { useReducer } from "react";
import reducer from "../../Reducer/reducer"
import axios from "axios";


export const initialState = {
  theme: "",
  dentistas: [],
  odontologo:{},
  favorites:JSON.parse(localStorage.getItem('favorit')) ||[],
  }

export const ContextGlobal = createContext();


 const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch]= useReducer(reducer,initialState)
 
  const endPoint='https://jsonplaceholder.typicode.com/users'

  useEffect(()=>{
    axios(endPoint)
    .then(res => dispatch({type: 'get_dentists' , payload: res.data},console.log(res.data)))
    
  },[])

  
  return (
    <ContextGlobal.Provider value={{
      state,dispatch
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal=()=> useContext(ContextGlobal)
