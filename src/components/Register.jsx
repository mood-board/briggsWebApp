import React from 'react'

const Register = () => {
    return (
        <section className="register-section">
            <form>
                <div>
                    <input type="text" placeholder="First Name" />
                </div>

                <div>
                    <input type="text" placeholder="Last Name" />
                </div>

                <div>
                    <input type="email" placeholder="E-mail Address" />
                </div>

                <div>
                    <input type="password" placeholder="Password" />
                </div>

                <div>
                    <input type="city" placeholder="City" />
                </div>

                <div>
                    <input type="country" placeholder="Country" />
                </div>

                <div>
                    <input type="date" placeholder="Date of Birth" />
                </div>

                <div className="profile-section">
                    <h4>Online Profiles</h4>
                    <input type="text" name="facebook" placeholder="Facebook profile"/>
                    <input type="text" name="twitter" placeholder="Twitter profile"/>
                    <input type="text" name="google" placeholder="Google profile"/>
                </div>
            
                <button>Sign Up</button>
            </form>
        </section>
    )
}

export default Register