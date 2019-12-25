

const store = (state={cnt:0},action)=>{
    switch(action.type){
        case "ADD":
            return {...state,cnt:state.cnt+1};
        case "SUB":
            return {...state,cnt:state.cnt-1};
        default:
            return state;
    }
}

export default store;