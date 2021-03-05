import { combineReducers } from 'redux'
import portafolio from './portafolio';
import profile from './profile';
import email from './email';
import screen from './screen';
export default combineReducers({
    portafolio:portafolio,
    profile:profile,
    email:email,
    screen:screen
})