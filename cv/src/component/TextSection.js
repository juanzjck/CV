import React, {Component, Fragment} from 'react';
import './style/section.css';

function TextSection(props){
    return(
        <div className="section">
            <div className="section__container">
    <h3 className="section__title">{props.title}</h3>
                <p className="section__paragraph">
                    {props.children}
                </p>
            </div>

        </div>
    );
}
export default TextSection;