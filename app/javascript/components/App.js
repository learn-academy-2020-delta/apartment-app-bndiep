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

class App extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_up_route,
      sign_out_route
    } = this.props
    return (
      <React.Fragment>
        <Router>
          <h1>Apartment App</h1>
          { logged_in &&
            <div>
              <a href={ sign_out_route }>Sign Out</a>
            </div>
          }
          { !logged_in &&
            <div>
              <a href={ sign_in_route }>Sign In</a>
            </div>
          }
          <Header />
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/apartmentedit/:id" component={ ApartmentEdit } />
              <Route path="/apartmentindex" component={ ApartmentIndex } />
              <Route path="/apartmentnew" component={ ApartmentNew } />
              <Route path="/apartmentshow/:id" component={ ApartmentShow } />
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
