import React from 'react'


const Login = () => {
    return(
        <section className="login-section">
            <div className="login-form">
                <form>
                    <h2>Login Form</h2><hr />
                    <div>
                        <input type="text" name="email" placeholder="E-mail Address" />
                    </div>

                    <div>
                        <input type="password" name="password" placeholder="Password" />
                    </div>

                    <button>Login</button>
                </form>
            </div>
        </section>
    )
}

export default Login