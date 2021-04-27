import styled,{css,keyframes} from 'styled-components'

export const CarouselWrapp=styled.div`
    display:flex;
    align-items:center;
`
export const Arrow=styled.button`
    background-color:white;
    border: solid #ffff;
    border-radius:50px;
    min-height:100px;
    min-width:100px;
    box-shadow:5px 5px 5px 5px #cccccc80;
    display:flex;
    padding:20px;
    justify-content:center;
    align-items:center;
    align-content:center;
    color:#00ACE4;
    margin:10px;
    &:hover{
        ${hover()}
      
    }
    &:active{
        box-shadow:5px 5px 5px 5px #07070763;
        ${click()}
        animation-iteration-count: 2;
        animation-direction: alternate;
    }
`
function click(){
   
    return css`animation:0.5s ${(keyframes`
        from {
            padding:20px;
            background-color:white;
        }
        to {
            padding:40px;
            background-color:#00ACE4;
        }
    `)};`
}

function hover(){
   
    return css`animation:0.3s ${(keyframes`
        from {
      
            padding:20px;
        }
        to {
            padding:40px;
           
        }
    `)} forwards;`
}

