import {createStore} from 'redux';

let user = {
    name:"Karthik"
}

const store = (state=user,action)=>{
    switch(action.type){
        case "UPD":
            return {...state,name:action.data.name};
        default:
            return state;
    }
}

let commonReducer = createStore(store);

export default commonReducer;