import React from "react"
import "./Users.css"


class Settings extends React.Component {
    render() {
        return (
            <section className="user_settings">
                <div className="personal_data">
                    <h4>Personal data</h4><hr />
                    
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" />
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
                        <input type="text" name="first_name" />
                    </div>

                    <div>
                        <label htmlFor="last_name">Last name</label>
                        <input type="text" name="last_name" />
                    </div>

                    <div>
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" />
                    </div>

                    <div>
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" />
                    </div>

                    <div>
                        <label>Date of Birth</label>
                        <span>
                            <input type="text" name="date" />
                            <input type="text" name="month" />
                            <input type="number" name="year" />
                        </span>
                    </div>

                    <div>
                        <label htmlFor="about_me">About Me</label>
                        <textarea>
                            Say something cool...
                        </textarea>
                    </div>

                </div>

                <div className="other_profiles">
                    <h4>Online Profiles</h4><hr />
                    <div>
                        <label htmlFor="profile_facebook">Facebook</label>
                        <input type="text" name="profile_facebook" />
                    </div>
                    <div>
                        <label htmlFor="profile_instagram">Instagram</label>
                        <input type="text" name="profile_instagram" />
                    </div>
                    <div>
                        <label htmlFor="profile_twitter">Twitter</label>
                        <input type="text" name="profile_twitter" />
                    </div>

                    <div>
                        <label htmlFor="profile_website">Website</label>
                        <input type="text" name="profile_website" />
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="email" placeholder="ofonimeusoro01@gmail.com" disabled />
                    </div>
                </div>

                <button>Save</button>
            </section>
        )
    }
}

export default Settings