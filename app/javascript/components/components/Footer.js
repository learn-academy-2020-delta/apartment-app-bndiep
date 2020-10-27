import React from "react"
import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

class Footer extends React.Component {
    render () {
        const {
            logged_in,
            sign_in_route,
            sign_up_route,
            sign_out_route
        } = this.props
        return (
        <React.Fragment>
            <div id="footer">
                <Nav>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/apartmentindex"> All the Apartments</NavLink>
                    </NavItem>
                    { logged_in &&
                        <NavItem>
                            <a href={ sign_out_route }>Sign Out</a>
                        </NavItem>
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