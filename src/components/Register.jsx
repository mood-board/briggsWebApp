import React from 'react'
import {bindActionCreators} from 'redux'  
import {connect} from 'react-redux'
import * as usersActions from '../redux/User';


class Register extends React.Component {
    
    onSubmit (event) {
        event.preventDefault()
        //TODO: Verify dirty data
        let {
            username,first_name,last_name,about_me,password,
            email,city,country,profile_facebook,profile_twitter,
            profile_instagram,profile_google,profile_website
        } = this.state 


        let form = {
            username,
            first_name,
            last_name,
            email,
            password,
            city,
            country,
            about_me,
            online_profile : {
                profile_facebook,
                profile_twitter,
                profile_google,
                profile_instagram,
                profile_website
            }
        }

        this.props.actions.register(form)
        
    }

    onFieldChanged (event) {
        this.setState({[event.target.name]: event.target.value})
    }
  
    render () {
      return (
        <form onChange={this.onFieldChanged.bind(this)} onSubmit={this.onSubmit.bind(this)}>
          <div><input placeholder="First Name" type="text" name="first_name" /></div>
          <div><input placeholder="Last Name" type="text" name="last_name" /></div>
          <div><input placeholder="Username" type="text" name="username" /></div>
          <div><input placeholder="Password" type="password" name="password" /></div>
          <div><input placeholder="E-mail Address" type="email" name="email" /></div>
          <div><input placeholder="City" type="text" name="city" /></div>
          <div><input placeholder="Country" type="text" name="country" /></div>
          <div>
              <textarea name="about_me" cols="30" rows="10" defaultValue="About Me goes here..."></textarea>
          </div>

          <div className="onlineProfiles">
            <h3>Online Profiles</h3> <hr/>

            <div><input type="text" name="profile_facebook" placeholder="Facebook Profile" /></div>
            <div><input type="text" name="profile_twitter" placeholder="Twitter Profile" /></div>
            <div><input type="text" name="profile_instagram" placeholder="Instagram Profile"/></div>
            <div><input type="text" name="profile_website" placeholder="Website URL" /></div>
          </div>
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
export default connect(null, mapDispatchToProps)(Register)