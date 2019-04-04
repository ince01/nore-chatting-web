import React, { Component } from 'react';
import './style.css';

class Main extends Component {
  render() {
    return (
      <div className="container-fluid" >
			<div className="row">
				<div className="col-sm-3" >
					<div className="separator">
						<div className="bordertit">
							<h4>AppChat</h4>
							<hr></hr>
						</div>
						<div className="form-group">
							<form className="form-group has-search inner-addon left-addon" >
								<span className="fa fa-search form-control-feedback"></span>
								<input type="text" className="form-control"  placeholder="Search.." name="search"/> 
							</form>
						</div>
						<div className="customlistview">
							<div className="imagecontainer">
								<img className="rounded-circle" src="https://img.mobiscroll.com/demos/Requiem_for_a_Dream.png" />
								<span className="online">
								</span>
							</div>
							<h4>Tri</h4>
							<p>Alo!</p>
						</div>
					</div>
				</div>
				<div className="col-sm-9">
					<div id="main">
						<div className="bordertit clearfix">
							<h4>Tên người nhận</h4>
							<div  className="img-container">
								<i id="#info" onclick="openNav()" className="fa fa-info-circle" ></i>
							</div>
							<hr></hr>
						</div>
						<div className="textchatbox">
							<hr></hr>
							<input type="text" className="form-control"  placeholder="Type Message..." name="textchatbox"/>
						</div>
					</div>
					<div id="mySidebar" className="sidebar">
						<i className="fa fa-remove closebtn" onclick="closeNav()" ></i>
						<div className="customlistview">
							<div className="imagecontainer">
								<img className="rounded-circle" src="https://img.mobiscroll.com/demos/Requiem_for_a_Dream.png" />
							</div>
							<h4>Tri</h4>
							<p>Đang hoạt động</p>
						</div>
						<hr></hr>
					</div>
				</div>
			</div>
    </div>
  
        )
  }
}

export default Main