/*const action = {
    add:{type:"ADD"},
    sub:{type:"SUB"}
}*/

const action = {
    add:()=>{
        return (dispatch, getState)=>{
            dispatch({type:"LOADING"});
            console.log(getState());
            setTimeout(()=>{
                dispatch({type:"ADD"});
                dispatch({type:"COMPLETED"});
            },5000)
            
        }
    },
    sub:()=>{
        return (dispatch, getState)=>{
            dispatch({type:"LOADING"});
            console.log(getState());
            setTimeout(()=>{
                dispatch({type:"SUB"});
                dispatch({type:"COMPLETED"});
            },5000)
        }
    },
    
}

export default action;