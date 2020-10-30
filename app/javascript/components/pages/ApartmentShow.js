import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'
class ApartmentShow extends React.Component {
    render () {
        console.log(this.props.apartment)
        const { apartment, logged_in } = this.props
        return (
        <React.Fragment>
            <div id="apt-show">
                <h3>{ apartment.street } Apartment</h3>
                <p>Street: { apartment.street }</p>
                <p>City: { apartment.city }</p>
                <p>State: { apartment.state }</p>
                <p>Manager: { apartment.manager }</p>
                <p>Manager's email: { apartment.email }</p>
                <p>Price: ${ apartment.price }</p>
                <p>Bedrooms: { apartment.bedrooms }</p>
                <p>Bathrooms: { apartment.bathrooms }</p>
                <p>Pets allowed: { apartment.pets }</p>

                { logged_in &&
                    <div>
                        <NavLink to={`/apartmentedit/${ apartment.id }`}>
                            <Button className="edit-button">
                                Edit Apartment Info
                            </Button>
                        </NavLink>
                        <NavLink to={'/apartmentindex'}>
                            <Button className="index-button">
                                Back to All Apartments
                            </Button>
                        </NavLink>
                    </div>
                }

                { !logged_in && 
                    <NavLink to={'/apartmentindex'}>
                        <Button className="index-button">
                            Back to All Apartments
                        </Button>
                    </NavLink>
                }
                
            </div>
            
        </React.Fragment>
        )
    }
}

export default ApartmentShow