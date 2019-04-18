import React, {Component} from 'react'
import { createStore} from 'redux'
import { connect } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

//default initila state for store
const INITIAL_STATE = {
    count:0,
    rotation: 0
  }
  
  /**
  reducer function contains a switch case statement. It takes two parameters - state and action.
  action object has this strucutre
  {
  type: "something",
  otherdata: {}
  }
  Every action object must contain a type property. Based on this type property reducer function perfroms an operation on state. You can not mutate the state. You must return a new object.
  **/
   const reducer = function(state = INITIAL_STATE, action){
    switch(action.type) {
      case "INCREMENT":
        return Object.assign({}, state, { count: state.count + 1, rotation: state.rotation + 20});
      case "DECREMENT":
        return Object.assign({}, state, { count: state.count - 1, rotation: state.rotation - 20});
      
      default:
        return state;
    }
  }
  
  /**
  We create store by passing reducer function and state into it. Passing the state is optional. If state is not passed in createStore function, it will take INITIAL_STATE passed into reducer as intial state.
  **/
  export const store = createStore(reducer, composeWithDevTools(
    // other store enhancers if any
  ));
  
  /**
  This is our main Component. After creating it, we will have to connect it with store, so that it can access state saved in the store and modify it. State can be modified only by dispatch function. We will pass the state and dispatch function in this component with help of mapStateToProps and mapDisaptchToProps below. This component will receive them in it's props.
  **/
  class ReduxCounter extends Component{
    constructor(props){
      super(props);
    }
    
    IncreaseHandler(){
      this.props.Increase();
    }
    
    DecreaseHandler(){
      this.props.Decrease();
    }
    
    render() {
      return (
        <>
        <img style={{transform: `rotate(${this.props.rotation}deg)`, width: "200px", marginBottom: "50px", transition: "transform 0.4s ease-in-out"}} src="../images/redux-logo.png" />
        <div>
        <button style={{width: "200px", height: "100px", fontWeight: "bold", fontSize: "40px", marginBottom: "20px", marginRight: "20px"}} onClick={this.DecreaseHandler.bind(this)}>-1</button>
        <button style={{width: "200px", height: "100px", fontWeight: "bold", fontSize: "40px"}} onClick={this.IncreaseHandler.bind(this)}>+1</button>
          <div style={{marginTop: "50px"}}>
              <span style={{fontSize:"45px"}}>{this.props.count}</span>
          </div>
        </div>
        </>
      )
    }
  }
  
  
  const mapStateToProps = function(state){
    return state;
  }
  
  const mapDispatchToProps = function(dispatch){
    return{
      Increase: function(){ return dispatch({type: "INCREMENT"})},
      Decrease: function(){ return dispatch({type: "DECREMENT"})}
    }
  }
  
  /**
  connect Counter component with store. mapStateToProps, mapDispatchToProps functions help us to define how we want to expose store to this component. We can control which data we want this component to access and which dispatch actions we want this component to have. 
  **/
  export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);
  