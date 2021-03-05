function portafolio(state={portafolioList:undefined},action){
    switch(action.type){
        case 'LOAD_ALL_PORTAFOLIO':{
            return {
                ...state,
                portafolioList:action.payload
                }
        }
        default:{
            return {...state}
        }   
    }
}
export default portafolio;