import React, {Component, Fragment} from 'react';
import './style/section.css';

function TextSection(props){
    return(
        <div  className="section" style={props.style}>
            <div className="section__container">
                <h3 className="section__title" style={props.styleTitle}>{props.title}</h3>
                <p className="section__paragraph">
                    {props.children}
                </p>
            </div>

        </div>
    );
}
export default TextSection;