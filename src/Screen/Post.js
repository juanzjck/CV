import React, {Component} from 'react';
import './style/post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import ScrollToTop from '../component/ScrollToTop';
import Video from '../component/Video';
import Image from '../component/Image';
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:this.props.match.params.id,
            code:  ' #include<stdio.h> int main() { \n printf("Hello Geeks");\n }'
        }
    }
    renderCode=()=>{
        return( 
            
            <pre className="code_container">
                <code>
                   {this.state.code}
                </code>                       
            </pre>
)
    }
    render() { 
        return ( 
            <ScrollToTop>
                <div className="post">
                            <div className="post__header"  id="header">
                                <h1>Este es un titulo</h1>
                                <p>Frase</p>
                                <a href="#" onClick={()=>{window.scrollTo({
                                      top: window.screen.height-250, 
                                      left: 0, 
                                      behavior: 'smooth'
                                })}}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></a>
                            </div>
                            <div className="post__container" id="content">
                                <h2>Titulo</h2>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et mauris quis elit iaculis commodo in vitae arcu. Vestibulum et eros vitae velit hendrerit vehicula eu eget nunc. Vivamus enim erat, mattis nec tempus eget, bibendum id urna. Maecenas finibus aliquam lacus, nec hendrerit sapien consequat vitae. Nunc sem risus, varius eu sapien in, interdum accumsan risus. Suspendisse viverra tincidunt ex, ac pulvinar libero iaculis at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla sit amet libero nibh. Curabitur pharetra fermentum augue a dictum. Duis eget imperdiet felis. Donec suscipit, libero ullamcorper congue molestie, ante mi cursus urna, mollis placerat augue lorem vitae lectus. Vestibulum ut ex ac libero dictum finibus. Maecenas elementum mollis urna, in vulputate ipsum rhoncus quis. Vestibulum ut ex sit amet libero bibendum fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <p>
                                Curabitur tristique purus in metus suscipit ornare. Etiam orci nulla, congue vel ipsum ac, luctus placerat lacus. Vivamus iaculis mauris nibh, eget interdum risus volutpat id. Donec bibendum efficitur risus et venenatis. Proin porta congue risus ut consectetur. Aenean vulputate urna tortor. Suspendisse ac ultricies leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et mauris quis elit iaculis commodo in vitae arcu. Vestibulum et eros vitae velit hendrerit vehicula eu eget nunc. Vivamus enim erat, mattis nec tempus eget, bibendum id urna. Maecenas finibus aliquam lacus, nec hendrerit sapien consequat vitae. Nunc sem risus, varius eu sapien in, interdum accumsan risus. Suspendisse viverra tincidunt ex, ac pulvinar libero iaculis at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla sit amet libero nibh. Curabitur pharetra fermentum augue a dictum. Duis eget imperdiet felis. Donec suscipit, libero ullamcorper congue molestie, ante mi cursus urna, mollis placerat augue lorem vitae lectus. Vestibulum ut ex ac libero dictum finibus. Maecenas elementum mollis urna, in vulputate ipsum rhoncus quis. Vestibulum ut ex sit amet libero bibendum fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <p>
                                Curabitur tristique purus in metus suscipit ornare. Etiam orci nulla, congue vel ipsum ac, luctus placerat lacus. Vivamus iaculis mauris nibh, eget interdum risus volutpat id. Donec bibendum efficitur risus et venenatis. Proin porta congue risus ut consectetur. Aenean vulputate urna tortor. Suspendisse ac ultricies leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                                </p>
                               {this.renderCode()}
                               <h2>Section</h2>
                               <p>
                                Curabitur tristique purus in metus suscipit ornare. Etiam orci nulla, congue vel ipsum ac, luctus placerat lacus. Vivamus iaculis mauris nibh, eget interdum risus volutpat id. Donec bibendum efficitur risus et venenatis. Proin porta congue risus ut consectetur. Aenean vulputate urna tortor. Suspendisse ac ultricies leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                                </p>
                                <p>
                                Curabitur tristique purus in metus suscipit ornare. Etiam orci nulla, congue vel ipsum ac, luctus placerat lacus. Vivamus iaculis mauris nibh, eget interdum risus volutpat id. Donec bibendum efficitur risus et venenatis. Proin porta congue risus ut consectetur. Aenean vulputate urna tortor. Suspendisse ac ultricies leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et mauris quis elit iaculis commodo in vitae arcu. Vestibulum et eros vitae velit hendrerit vehicula eu eget nunc. Vivamus enim erat, mattis nec tempus eget, bibendum id urna. Maecenas finibus aliquam lacus, nec hendrerit sapien consequat vitae. Nunc sem risus, varius eu sapien in, interdum accumsan risus. Suspendisse viverra tincidunt ex, ac pulvinar libero iaculis at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla sit amet libero nibh. Curabitur pharetra fermentum augue a dictum. Duis eget imperdiet felis. Donec suscipit, libero ullamcorper congue molestie, ante mi cursus urna, mollis placerat augue lorem vitae lectus. Vestibulum ut ex ac libero dictum finibus. Maecenas elementum mollis urna, in vulputate ipsum rhoncus quis. Vestibulum ut ex sit amet libero bibendum fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <p>
                                Curabitur tristique purus in metus suscipit ornare. Etiam orci nulla, congue vel ipsum ac, luctus placerat lacus. Vivamus iaculis mauris nibh, eget interdum risus volutpat id. Donec bibendum efficitur risus et venenatis. Proin porta congue risus ut consectetur. Aenean vulputate urna tortor. Suspendisse ac ultricies leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                                </p>
                                {this.renderCode()}
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et mauris quis elit iaculis commodo in vitae arcu. Vestibulum et eros vitae velit hendrerit vehicula eu eget nunc. Vivamus enim erat, mattis nec tempus eget, bibendum id urna. Maecenas finibus aliquam lacus, nec hendrerit sapien consequat vitae. Nunc sem risus, varius eu sapien in, interdum accumsan risus. Suspendisse viverra tincidunt ex, ac pulvinar libero iaculis at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla sit amet libero nibh. Curabitur pharetra fermentum augue a dictum. Duis eget imperdiet felis. Donec suscipit, libero ullamcorper congue molestie, ante mi cursus urna, mollis placerat augue lorem vitae lectus. Vestibulum ut ex ac libero dictum finibus. Maecenas elementum mollis urna, in vulputate ipsum rhoncus quis. Vestibulum ut ex sit amet libero bibendum fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <Video>
                                    
                                </Video>
                                <Image></Image>
                            </div>
                        </div>
            </ScrollToTop>
        );
    }
}
 
export default Post;