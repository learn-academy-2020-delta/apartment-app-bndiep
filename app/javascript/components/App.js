import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import MyApartmentIndex from './pages/MyApartmentIndex'
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

  createNewApartment = (newApartment) => {
    console.log(newApartment)
  }

  updateApartment = (apartment, id) => {
    console.log("apartment", apartment, "id", id)
  }

  render () {
    const {
      logged_in,
      sign_in_route,
      sign_up_route,
      sign_out_route,
      current_user
    } = this.props
    console.log("current user:", current_user)
    return (
      <React.Fragment>
        <Router>
          <h1>Apartment Finder</h1>
          <Header
            logged_in={ logged_in }
            sign_in_route={ sign_in_route }
            sign_up_route={ sign_up_route }
            sign_out_route={ sign_out_route }
          />
            <Switch>
              {/* Unprotected Routes */}
              <Route exact path="/" component={ Home } />

              <Route path="/apartmentindex" render={ (props) => <ApartmentIndex apartments={ this.state.apartments } /> } />
              
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

              {/* Protected Routes */}
              { logged_in && 
                <Route path="/myapartmentindex" render={ (props) => {
                  let user = current_user.id
                  console.log(user)
                  let apartments = this.state.apartments.filter(apartment => apartment.user_id === user)
                  console.log(apartments)
                  return(
                    <MyApartmentIndex apartments={ apartments } />
                  )
                  }
                } />
              }

              { logged_in &&
                <Route path="/apartmentedit/:id" render={ (props) => {
                  let id = props.match.params.id
                  let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
                  return (
                    <ApartmentEdit updateApartment={ this.updateApartment } current_user={ current_user } apartment={ apartment } />
                  )
                  }
                } />
              }
              
              { logged_in &&
                <Route path="/apartmentnew" render={ (props) => <ApartmentNew
                  createNewApartment={ this.createNewApartment }
                  current_user={ current_user } /> 
                } />
              }
              
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
    )
  }
}

export default App
