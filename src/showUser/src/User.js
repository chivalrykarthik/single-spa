import React from 'react';
import {connect} from 'react-redux';
const User = props=>{
    return(
        <div>
            Hello user:{props.name}
        </div>
    )
}

const mapStateToProps = (state)=>({name:state.name});

export default connect(mapStateToProps)(User);

