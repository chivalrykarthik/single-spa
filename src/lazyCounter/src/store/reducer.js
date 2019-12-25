
let initialState = {a:1,status:"COMPLETED"};
const reducer = (state = initialState, action)=>{
    let finalState;
    switch(action.type){
        case "ADD":
            finalState = {...state,a:state.a+1};
        break;
        case "SUB":
            finalState = {...state,a:state.a-1};
        break;
        case "LOADING":
            finalState={...state,status:"LOADING..."}
        break;
        case "COMPLETED":
            finalState = {...state, status:"COMPLETED"}
        break;
        default:
            finalState = state;
        break;        
    }
    return finalState;
}

export default reducer;