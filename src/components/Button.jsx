import React from 'react'
import { Link } from 'react-router-dom'

export default class Button extends React.Component {
    render() {
        return (
            <Link to={this.props.link} className="hideLink">
                <div className="menuButton">
                    {this.props.name}
                </div>
            </Link>
        )
    }
}
