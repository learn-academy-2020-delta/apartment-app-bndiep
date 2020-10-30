import React from 'react'
import {
    Nav,
    NavItem
} from 'reactstrap'

class Header extends React.Component {
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
                    <Nav id="header">
                        {/* <NavItem>
                            <a href="/">Home</a>
                        </NavItem>
                        <NavItem>
                            <a href="/apartmentindex"> All the Apartments</a>
                        </NavItem> */}
                        { logged_in &&
                            <>
                                <NavItem>
                                    <a href="/apartmentnew">Add a New Apartment</a>
                                </NavItem>
                                <NavItem>
                                    <a href={ sign_out_route }>Sign Out</a>
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

export default Header