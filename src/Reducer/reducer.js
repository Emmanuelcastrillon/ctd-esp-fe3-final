const reducer = (state,action) => {
   switch (action.type) {
    case 'get_dentists':
        return{...state, dentistas: action.payload}
    case 'get_odontologo':
        return{...state, odontologo:action.payload}
    case'add_favorites':
        return{...state, favorites:[...state.favorites,action.payload] }        
    case 'change_style':
        return{...state, theme:action.payload}    
    case 'delete_favorites':
         return{...state, favorites:action.payload}             
    default:
        break;
   }

}
export default reducer