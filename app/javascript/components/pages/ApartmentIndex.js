import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

class ApartmentIndex extends React.Component {
    render () {
        console.log(this.props.apartments)
        return (
        <React.Fragment>
            <h2>All Available Apartments</h2>
            <div id="all-apts">
                { this.props.apartments.map((apartment, index)=> {
                return(
                    <div className="apt-card" key={ index }>
                        <h5>{ apartment.street }</h5>
                        <h5>{ apartment.city }</h5>
                        <h5>{ apartment.state }</h5>
                        <NavLink to={`/apartmentshow/${ apartment.id }`}>
                            <Button className="view-button">
                                View Apartment
                            </Button>
                        </NavLink>
                    </div>
                    )
                })}
            </div>
        </React.Fragment>
        )
    }
}

export default ApartmentIndex