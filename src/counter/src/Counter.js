import React from 'react';
import {connect} from 'react-redux';
const Counter = (props)=>{
    return(
        <div>
            Counter:{props.cnt}
            <br />
            <button onClick = {props.add} >+</button>
            <button onClick = {props.sub} >-</button>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        cnt:state.cnt
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        add:()=>dispatch({type:"ADD"}),
        sub:()=>dispatch({type:"SUB"})

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);