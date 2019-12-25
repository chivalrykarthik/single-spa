import React from 'react';
import { Provider } from 'react-redux';
import User from './User';
import store from './../../common/commonReducer';
const App = () => {
    return (
        <Provider store={store} >
            <User  />
        </Provider>
    )
}

export default App;