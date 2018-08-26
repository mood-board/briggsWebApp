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
  
    render () {
      return (
        <form 
          onChange={this.onFieldChanged.bind(this)} onSubmit={this.onSubmit.bind(this)}
          className="font-sans text-sm rounded w-full max-w-md mx-auto my-8 px-8 pt-6 pb-8">
          <div className="relative border rounded mb-4 shadow appearance-none label-floating">
            <input className="w-full py-2 px-3 text-grey-darker leading-normal rounded" name="email" type="text" placeholder="Username" />
          </div>
          <div className="relative border rounded mb-4 shadow appearance-none label-floating">
            <input className="w-full py-2 px-3 text-grey-darker leading-normal rounded" name="password" type="password" placeholder="Password" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-black hover:bg-black text-white py-2 px-4" type="submit">
            Sign In
            </button>
            <a className="inline-block align-baseline text-grey hover:text-grey-darker" href="#">
              Forgot Password?
            </a>
          </div>
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