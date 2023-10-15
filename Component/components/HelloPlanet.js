import React from 'react';
export class HelloPlanet extends React.Component{
	render(){
		return <h1>Hey you are ob {this.props.name}</h1>
	}
}