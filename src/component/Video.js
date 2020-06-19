import React from 'react';

import ReactPlayer from 'react-player';
import "./style/video.css"
function Video(props){
    console.log("No esta funcionando");
    return (
        <div className="Video">
            <div className="video__container">
                 <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing={false} />
            </div>
        </div>

  );
}
export default Video;