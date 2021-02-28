import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    return (
        <>
            <h3 className="auth__title">Login Screen</h3>

            <form>
                <input
                    autoComplete="off"
                    className="auth__input"
                    type="email"
                    placeholder="email"
                    name="email"
                />

                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                />

                <button 
                    className="btn btn-primary"
                    type="submit"
                >
                    Login
                </button>

                <hr />

                <div className="auth__socials-networks">
                    <p>Login with socials networks</p>

                    <div
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link to="/auth/register" className="link">
                    Create new account
                </Link>

            </form>
        </>
    )
}
