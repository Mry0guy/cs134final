import React from 'react';
import Button from './Button'

const buttons = [
	<Button name="Home" link="/" />,
	<Button name="Resume" link="/Resume" />,
	<Button name="Contact Me" link="/Contact" />,
	<Button name="User Reviews" link="/Reviews" />,
	<Button name="Recomendations" link="/Recomendations" />,
	<Button name="Photos" link="/Photos"/>,
	<Button name="Github" link="/Github" />
]

export default class Navigation extends React.Component {
	render() {
		return (
			<div>
				<div className="menuBar">
					{buttons.map((e) => { return (e) })}
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
		)
	}
}

