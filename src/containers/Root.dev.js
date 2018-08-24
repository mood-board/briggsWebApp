import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import { Router, Route } from 'react-router-dom'
import Register from '../components/Register';
import Login from '../components/Login';
import history from '../history';
import Settings from '../components/user/Settings';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <div>
            <Route exact path="/" component={() => <h1>Number #1 Stock Photos Site</h1>} />
            <Route path="/auth/signup" component={Register} />
            <Route path="/auth/login" component={Login} />
            <Route path="/accounts/settings" component={Settings} />
        <DevTools />
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root