import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Skill from './Skill';

import {  faMobile } from '@fortawesome/free-solid-svg-icons';
import { faReact, faUnity, faNodeJs, faDocker,faGithub } from '@fortawesome/free-brands-svg-icons';
class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            skils:[
                {icon:faReact,category:'Front End' ,title:"React.js",description:"A front end javascript libray, a perfect weapons for new web app generation.\n I use this library in order to crete awesome web pages even a complete plataform, this library is only for the front, I use for the back Node.js and mongoDB."},
                {icon:faUnity,category:'Video game' ,title:"UNITY 3D",description:"Unity is a videogame engine, I make videogames, 3D or 2D games, mobile or desktop.\n Unity give the tools to make moderms and cool games, deploy the game for the most used plataforms, for exaple: Android, Apple, Windows even Linux."},
                {icon:faNodeJs,category:'Back End' ,title:"Node.js",description:  "This a javascript library that allow run javascript fron the server, this based of ECMAScript. \nI use this technology for the back, make services and give acces to this service althrow whit a API rest, so any front-end can use up."+"I use express like a framwork."},
                {icon:faMobile,category:'Front End' ,title:"React Native",description:  "This a javascript library that allow run javascript fron the server, this based of ECMAScript. \nI use this technology for the back, make services and give acces to this service althrow whit a API rest, so any front-end can use up."+"I use express like a framwork."},
                {icon:faDocker,category:'DevOps - Deploy' ,title:"Docker",description: "This a javascript library that allow run javascript fron the server, this based of ECMAScript. \nI use this technology for the back, make services and give acces to this service althrow whit a API rest, so any front-end can use up."+"I use express like a framwork."},
                {icon:faGithub,category:'Repository' ,title:"Git Hub",description: "This a javascript library that allow run javascript fron the server, this based of ECMAScript. \nI use this technology for the back, make services and give acces to this service althrow whit a API rest, so any front-end can use up."+"I use express like a framwork."},
                  
            ] 
        }
    }
    render() { 
        return (  
              <div className="corousel">
                        <div className="corousel__container">
                           {this.state.skils.map((doc,Id)=>{
                              return <Skill key={Id} category={doc.category} icon={doc.icon} title={doc.title} description={doc.description}/>
                           })}
                      </div>
                </div> 
                    );
    }
}
 
export default Skills;