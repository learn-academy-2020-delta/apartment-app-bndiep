import React from "react"

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import NotFound from './pages/NotFound'

import mockApartments from './mockApartments.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: mockApartments
    }
  }
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_up_route,
      sign_out_route,
      current_user
    } = this.props
    return (
      <React.Fragment>
        <Router>
          <h1>Apartment App</h1>
          <Header />
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/apartmentindex" render={ (props) => <ApartmentIndex apartments={ this.state.apartments } /> } />
              
              <Route path="/apartmentedit/:id" component={ ApartmentEdit } />
              
              <Route path="/apartmentnew" component={ ApartmentNew } />

              <Route path="/apartmentshow/:id"
                render={ (props) => {
                  let id = props.match.params.id
                  let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
                  return (
                    <ApartmentShow apartment={ apartment }/>
                  )
                  }
                }
              />
              <Route component={ NotFound } />
            </Switch>
          <Footer
            logged_in={ logged_in }
            sign_in_route={ sign_in_route }
            sign_up_route={ sign_up_route }
            sign_out_route={ sign_out_route }
            />
        </Router>
      </React.Fragment>
    );
  }
}

export default App
