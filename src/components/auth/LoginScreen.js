import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { startLoginEmailPassword, startLoginWithGoogle } from '../../actions/auth';
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

    const [formValue, handleChangeInput] = useForm({
        email: "",
        password: ""
    });
    
    const { email, password } = formValue;

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.ui);

    const handleSubmit = event => {
        event.preventDefault();

        dispatch(startLoginEmailPassword(email, password));
    }

    const handleLoginWithGoogle = () => {
        dispatch(startLoginWithGoogle());
    }

    return (
        <>
            <h3 className="auth__title">Login Screen</h3>

            <form onSubmit={ handleSubmit }>
                <input
                    autoComplete="off"
                    className="auth__input"
                    type="email"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={ handleChangeInput }
                />

                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={ handleChangeInput }
                />

                <button 
                    className="btn btn-primary"
                    type="submit"
                    disabled={loading}
                >
                    Login
                </button>

                <hr />

                <div className="auth__socials-networks">
                    <p>Login with socials networks</p>

                    <div
                        className="google-btn"
                        onClick={ handleLoginWithGoogle }
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
