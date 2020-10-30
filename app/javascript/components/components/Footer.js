import React from 'react'
import {
    Nav,
    NavItem
} from 'reactstrap'

class Footer extends React.Component {
    render() {
        const {
            logged_in,
            sign_in_route,
            sign_up_route,
            sign_out_route
        } = this.props
        return (
            <React.Fragment>
                <div>
                    <Nav id="footer">
                        <NavItem>
                            <a href="/">Home</a>
                        </NavItem>
                        <NavItem>
                            <a href="/apartmentindex"> All the Apartments</a>
                        </NavItem>
                        { logged_in &&
                            <>
                                <NavItem>
                                    <a href={ sign_out_route }>Sign Out</a>
                                </NavItem>
                                <NavItem>
                                    <a href="/apartmentnew">Add a New Apartment</a>
                                </NavItem>
                                <NavItem>
                                    <a href="/myapartmentindex">See My Apartments</a>
                                </NavItem>
                            </>
                        }
                        { !logged_in &&
                            <>
                                <NavItem>
                                    <a href={ sign_in_route }>Sign In</a>
                                </NavItem>
                                <NavItem>
                                    <a href={ sign_up_route }>Sign Up</a>
                                </NavItem>
                            </>
                        }
                    </Nav>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer