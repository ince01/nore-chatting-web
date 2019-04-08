import React from 'react';
import './style.css'

class Customlistview extends React.Component {
    render(){
        return(
            <div className="customlistview">
				<div className="imagecontainer">
					<img className="rounded-circle" src="https://img.mobiscroll.com/demos/Requiem_for_a_Dream.png" />
						<span className="online">
						</span>
				</div>
			    <h4>Tri</h4>
				<p>Alo!</p>
			</div>
        )
    }
}

export default Customlistview