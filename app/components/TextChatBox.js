import React from 'react';
import './style.css'

class TextChatBox extends React.Component{
    render(){
        return(
            <div className="textchatbox">
				<hr></hr>
				<input type="text" className="form-control"  placeholder="Type Message..." name="textchatbox"/>
			</div>
        )
    }
}

export default TextChatBox