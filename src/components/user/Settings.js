import React from "react"
import { connect } from "react-redux"

import "./Users.css"


//TODO:
//Get the User details from the store and populate it on this form


class Settings extends React.Component {
    constructor(){
        super();
        this.onFieldChange = this.onFieldChange.bind(this)
        this.onSubmit = this.onFieldChange.bind(this)
    }


    onFieldChange (event) {
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit (event) {
        event.preventDefault()
        console.log(document.getElementsByName("username").value)
    }

    render() {
        if(!this.props.user) {
            return <div>Loading...</div>
        }
        return (
            <section className="user_settings">
                <div className="personal_data">
                    <h4>Personal data</h4><hr />
                    
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" value={this.props.user.username} onChange={this.onFieldChange} />
                    </div>

                    <div>
                        <label htmlFor="profile_image"> Profile Image</label>
                        <img src="https://via.placeholder.com/50x50" />
                    </div>

                    <div>
                        <label>Please Select</label>
                        <select>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="first_name">First name</label>
                        <input type="text" name="first_name" value={this.props.user.first_name} onChange={this.onFieldChange.bind(this)} />
                    </div>

                    <div>
                        <label htmlFor="last_name">Last name</label>
                        <input type="text" name="last_name" value={this.props.user.last_name} onChange={this.onFieldChange.bind(this)} />
                    </div>

                    <div>
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" value={this.props.user.city} onChange={this.onFieldChange.bind(this)} />
                    </div>

                    <div>
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" value={this.props.user.country} onChange={this.onFieldChange.bind(this)} />
                    </div>

                    <div>
                        <label>Date of Birth</label>
                        <span>
                            <input type="text" name="date" onChange={this.onFieldChange.bind(this)} />
                            <input type="text" name="month" onChange={this.onFieldChange.bind(this)} />
                            <input type="number" name="year" onChange={this.onFieldChange.bind(this)} />
                        </span>
                    </div>

                    <div>
                        <label htmlFor="about_me">About Me</label>
                        <textarea onChange={this.onFieldChange.bind(this)}>
                           {this.props.user.about_me}
                        </textarea>
                    </div>

                </div>

                <div className="other_profiles">
                    <h4>Online Profiles</h4><hr />
                    <div>
                        <label htmlFor="profile_facebook">Facebook</label>
                        <input type="text" name="profile_facebook" value={this.props.user.online_profile.profile_facebook} onChange={this.onFieldChange.bind(this)} />
                    </div>
                    <div>
                        <label htmlFor="profile_instagram">Instagram</label>
                        <input type="text" name="profile_instagram" value={this.props.user.online_profile.profile_instagram} onChange={this.onFieldChange.bind(this)} />
                    </div>
                    <div>
                        <label htmlFor="profile_twitter">Twitter</label>
                        <input type="text" name="profile_twitter" value={this.props.user.online_profile.profile_twitter} onChange={this.onFieldChange.bind(this)} />
                    </div>

                    <div>
                        <label htmlFor="profile_website">Website</label>
                        <input type="text" name="profile_website" value={this.props.user.online_profile.profile_website} onChange={this.onFieldChange.bind(this)} />
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="email" value={this.props.user.email} disabled />
                    </div>
                </div>

                <button onClick={this.onSubmit.bind(this)}>Save</button>
            </section>
        )
    }
}

function mapStateToProps({user}){
    let userObject = user.toJS()
    return {
        user :userObject.authedUser
    }
}

export default connect(mapStateToProps, null)(Settings);