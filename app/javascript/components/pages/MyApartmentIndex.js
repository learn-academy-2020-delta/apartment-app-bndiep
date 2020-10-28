import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

class MyApartmentIndex extends Component {
    render() {
        return(
            <React.Fragment>
                <h2>All Your Apartments</h2>
                <div id="all-apts">
                    { this.props.apartments.map((apartment, index)=> {
                    return(
                        <div className="apt-card" key={ index }>
                            <h5>{ apartment.street }</h5>
                            <h5>{ apartment.city }</h5>
                            <h5>{ apartment.state }</h5>
                            <NavLink to={`/apartmentshow/${ apartment.id }`}>
                                <Button className="view-apt">
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
export default MyApartmentIndex