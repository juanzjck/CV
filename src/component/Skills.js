import React, {Component} from 'react';
import Skill from './Skill';
import {  faMobile } from '@fortawesome/free-solid-svg-icons';
import { GrGraphQl } from "react-icons/gr";
import { faReact, faUnity, faNodeJs, faDocker,faGithub } from '@fortawesome/free-brands-svg-icons';
class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            skils:[
                {icon:faReact,
                    category:'Front End' ,
                    title:"React.js",
                    description:"A front-end javascript library, With React we can build an awesome web app, react  used for more than 8000 industry leaders."},
                {icon:faUnity,
                    category:'Video game',
                    title:"UNITY 3D",
                    description:"Unity is the most used game engine, we can build video games for the all most used platforms. From 2D games till 3D cinematographic big experience"},
                {icon:faNodeJs,
                    category:'Back End',
                    title:"Node.js",
                    description: "Is a JavaScript runtime built on Chrome's V8 JavaScript engine.  This is a dependency for build our apps with react, react-native, graphql and others libraries "},
                {icon:faMobile,
                    category:'Front End' ,
                    title:"React Native",
                    description:  "Build mobile apps with React Native, we can build app for both platforms IOS and Android. Apollo client, graphql and firebase are completed that can be mixed with React Native in order to create a full app."},
                {icon:faDocker,
                    category:'DevOps' ,
                    title:"Docker",
                    description: "Docker is an open-source project that helps to solve principles issues for software development; compile, deploy, and exec. Docker makes this because use a containers system, that lets to share the resources of our hardware without a guest OS, this system is easily replicable and scalable."},
                {icon:faGithub,
                    category:'Repository' ,
                    title:"Git Hub",
                    description: "Git hub allows us to have a repository with our project and allow us to collaborate with huge and little teams, it uses a version control system, Git. Git focuses on the performance and confirmability of the maintenance of versions of our software. "},
                {icon:GrGraphQl,
                    category: "API's language for queries and mutations" ,
                    title:"Graphql",
                    description: "Git hub allows us to have a repository with our project and allow us to collaborate with huge and little teams, it uses a version control system, Git. Git focuses on the performance and confirmability of the maintenance of versions of our software. "},
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