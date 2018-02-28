import React, { Component } from 'react';

import avatar from '../me.jpg'

export default class Card extends Component {
	render() {
		return (
			<div className="container">
				<div className="card" style={{"width": "20rem"}}>
					<img className="card-img-top" src={avatar} alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Rudy Rocha</h5>
						<p className="card-text">Software Developer &middot; Mexican 19 Years</p>
						<a target="_blank" href="https://about.me/rudyrocha" className="btn btn-primary">Personal Web Site</a>
					</div>
				</div>
			</div>
		);
	}
}
