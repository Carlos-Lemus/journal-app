import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">Register</h3>

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
                
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                />

                <button 
                    className="btn btn-primary mb-5"
                    type="submit"
                >
                    Register
                </button>

                <Link to="/auth/login" className="link">
                    Alredy registered
                </Link>

            </form>
        </>
    )
}
