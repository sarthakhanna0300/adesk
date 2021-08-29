const initialState={
  present: !! localStorage.getItem("token")
}
const reducer=(state=initialState,action)=>
{
 switch(action.type)
 {
     case "SetToken":
         return {
             ...state,
             present:!state.present
         }
         default : return state
 }
}
export default reducer