import React from "react"
import blue_flat from '../assets/blue_flat.jpg'

class Home extends React.Component {
    render () {
        return (
        <React.Fragment>
            <h3>Home</h3>
            <img id="apartment-home" src={ blue_flat } alt="blue apartment view" />
        </React.Fragment>
        )
    }
}

export default Home