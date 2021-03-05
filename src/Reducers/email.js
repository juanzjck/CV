function email(state={message:'',email:'',status:''},action){
    switch(action.type){
        case 'CATCH_RESULT':{
            return {
                ...state,
                status:action.payload
                }
        }
        case 'SET_MESSAGE':{
            return {
                ...state,
                message:action.payload
                }
        }
        case 'SET_EMAIL':{
            return {
                ...state,
                email:action.payload
                }
        }
        default:{
            return {...state}
        }   
    }
}
export default email;