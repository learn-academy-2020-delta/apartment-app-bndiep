import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

class MyApartmentIndex extends Component {
    render() {
        return(
            <React.Fragment>
                <h2>All of Your Apartments</h2>
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
                            <NavLink to={`/apartmentedit/${ apartment.id }`}>
                                <Button className="edit-button">
                                    Edit Listing
                                </Button>
                            </NavLink>
                            <span className="remove" onClick={ () => { this.props.deleteApartment(apartment.id) }}>
                                Remove Listing
                            </span>
                        </div>
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}
export default MyApartmentIndex