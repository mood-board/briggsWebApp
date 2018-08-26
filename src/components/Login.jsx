import React from 'react'
import {bindActionCreators} from 'redux'  
import {connect} from 'react-redux'
import * as usersActions from '../redux/User';

class Login extends React.Component {
    
    onSubmit (event) {
        event.preventDefault()
        this.props.actions.login(this.state)
    }

    onFieldChanged (event) {
        this.setState({[event.target.name]: event.target.value})
    }
  
    render () {``
      return (
        <form onChange={this.onFieldChanged.bind(this)} onSubmit={this.onSubmit.bind(this)}>
          <input placeholder="E-mail Address" type="email" name="email" />
          <input placeholder="Password" type="password" name="password" />
          <button type="submit">Sign In</button>
        </form>
      )
    }
  }

function mapDispatchToProps(dispatch) {  
    return {
      actions: bindActionCreators(usersActions, dispatch)
    };
}
export default connect(null, mapDispatchToProps)(Login)