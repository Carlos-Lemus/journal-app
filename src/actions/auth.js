import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { finishedLoading, startLoading } from "./ui";

import Swal from 'sweetalert2'

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            })
            .catch(({message}) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Problem',
                    text: message
                })
            })
            .finally(() => {
                dispatch(finishedLoading());
            });
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {

                await user.updateProfile({ displayName: name });

                dispatch(login(user.uid, user.displayName))
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export const startLoginWithGoogle = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));

            })
    };
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();

        dispatch(logout());
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        name: displayName
    }
});

export const logout = () => ({
    type: types.logout
})