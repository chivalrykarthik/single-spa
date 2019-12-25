import React from 'react';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';

import reducer from './store/reducer';

let store = createStore(reducer, applyMiddleware(thunk));

//ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

const HomeCmp = ()=>{
    return(
        <Provider store={store}>
            <App />
        </Provider>        
    )
}



export default HomeCmp;