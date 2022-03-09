import React from 'react'

class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
           
            <h1>{this.props.title}</h1>
            <p>{this.props.releaseDate}</p>
            <p>{this.props.overwiew}</p>
            <img src={this.props.img} />
            </>
        )
    }
}
export default Card