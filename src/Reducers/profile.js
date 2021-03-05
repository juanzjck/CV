function profile(state={profile:undefined},action){
    switch(action.type){
        case 'LOAD_INFO':{
            return {
                ...state,
                profile:action.payload
                }
        }
        default:{
            return {...state}
        }   
    }
}
export default profile;