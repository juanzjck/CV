function screen(state={loading:false,error:''},action){
    switch(action.type){
        case 'LOADING':{
            return {
                ...state,
                loading:action.payload
                }
        }
        case 'ERROR':{
            return {
                ...state,
                error:action.payload
                }
        }
        default:{
            return {...state}
        }   
    }
}
export default screen;