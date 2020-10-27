import React from "react"

class ApartmentIndex extends React.Component {
    render () {
        console.log(this.props.apartments)
        return (
        <React.Fragment>
            <h2>All Available Apartments</h2>
            { this.props.apartments.map((apartment, index)=> {
                return(
                    <div key={ index }>
                        <h5>{ apartment.street }</h5>
                        <h5>{ apartment.city }</h5>
                        <h5>{ apartment.state }</h5>
                    </div>
                )
            })}
        </React.Fragment>
        )
    }
}

export default ApartmentIndex