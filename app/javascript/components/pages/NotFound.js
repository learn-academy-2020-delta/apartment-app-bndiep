import React from "react"
import error from '../assets/not_found.jpg'

class NotFound extends React.Component {
    render () {
        return (
        <React.Fragment>
            <div id="404">
                <h3>Page cannot be found.</h3>
                <img id="eror" src={ error } alt="building scaffolding" />
            </div>
        </React.Fragment>
        )
    }
}

export default NotFound