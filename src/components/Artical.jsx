import React from 'react'



export default class Artical extends React.Component {
    render() {
        return (
            <div>
                <br />
                <div className="Artical">
                    {this.props.children}
                </div>
                <br />
            </div>
        )
    }
}
