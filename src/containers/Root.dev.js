import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import { Route } from 'react-router-dom'
import Register from '../components/Register';
import Login from '../components/Login';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
         <Route exact path="/" component={() => <h1>Number #1 Stock Photos Site</h1>} />
          <Route path="/auth/signup" component={Register} />
          <Route path="/auth/login" component={Login} />
      <DevTools />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root