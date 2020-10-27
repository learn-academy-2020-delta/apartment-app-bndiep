import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'
class ApartmentShow extends React.Component {
    render () {
        console.log(this.props.apartment)
        const { apartment } = this.props
        return (
        <React.Fragment>
            <h3>Show Apartment</h3>
            <p>Street: { apartment.street }</p>
            <p>City: { apartment.city }</p>
            <p>State: { apartment.state }</p>
            <p>Manager: { apartment.manager }</p>
            <p>Manager's email: { apartment.email }</p>
            <p>Price: { apartment.price }</p>
            <p>Bedrooms: { apartment.bedrooms }</p>
            <p>Bathrooms: { apartment.bathrooms }</p>
            <p>Pets allowed: { apartment.pets }</p>
            <NavLink to={'/apartmentindex'}>
                <Button>
                    Back to All Apartments
                </Button>
            </NavLink>
        </React.Fragment>
        )
    }
}

export default ApartmentShow