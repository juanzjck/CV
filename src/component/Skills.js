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
                {icon:faNodeJs,category:'Back End' ,title:"Node.js",description:  "Is a JavaScript runtime built on Chrome's V8 JavaScript engine.  This is a dependency for build our apps with react, react-native, graphql and others libraries "},
                {icon:faMobile,category:'Front End' ,title:"React Native",description:  "Build native apps with React Native, React Native uses a bridge to convert the javascript components to native components, for both platforms IOS and Android. Apollo client, graphql and firebase are completed that can be mixed with React Native in order to create a full app."},
                {icon:faDocker,category:'DevOps' ,title:"Docker",description: "Docker is an open-source proyecto that helps to solve principles issues for software development; compile, deploy, and exec. Docker makes this because use a containers system, that lets to share the resources of our hardware without a guest OS, this system is easily replicable and scalable."},
                {icon:faGithub,category:'Repository' ,title:"Git Hub",description: "Git hub allows us to have a repository with our project and allow us to collaborate with huge and little teams, it uses a version control system, Git. Git focuses on the performance and confirmability of the maintenance of versions of our software. Git is free software, so there are a community that is behind  and are working."},
                  
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