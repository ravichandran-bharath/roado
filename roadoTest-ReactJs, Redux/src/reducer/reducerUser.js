const reducerUser = function(state={email:"", type:"", authed:false}, action){
    if(action.type==="LOGGED_IN"){
        state = {...state, email: action.payload.email, type: action.payload.type, authed:true }
    }else if(action.type==="LOGOUT"){
        state = {...state, authed:false }
    }
    return state;
}

export default reducerUser;