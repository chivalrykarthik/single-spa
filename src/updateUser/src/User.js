import React from 'react';
import { connect } from 'react-redux';
const User = props => {
    const handleChange = (e) => {
        props.upd(e.target.value);
    }
    return (
        <div>
            <input
                type='text'
                value={props.name}
                onChange={handleChange}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({ name: state.name });
const mapDispatchToProps = dispatch => {
    return {
        upd: (val) => dispatch({ type: "UPD", data: { name: val } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);