import React from 'react';
import {connect} from 'react-redux';

import action from './store/action';

function App(props) {
  return (
    <div className="App">
      SampleCnt {props.a}
      <button onClick = {props.add} >Add</button>
      <button onClick = {props.sub} >Sub</button>
      <br />
      CurrentStaus:{props.status}
    </div>
  );
}


const mapStateToProps = state=>({
  a:state.a,
  status:state.status
});
const mapDispatchToProps = dispatch=>({
  add:()=>dispatch(action.add()),
  sub:()=>dispatch(action.sub()),
});

export default connect(mapStateToProps,mapDispatchToProps)(App);