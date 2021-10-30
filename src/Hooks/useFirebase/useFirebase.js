import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../../Firebase/Firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    /* Provider */
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    /* Google Login/Register */
    const loginUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    /* Facebook Login/Register */
    const loginUsingFacebook = () => {
        setIsLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }

    /* Display Name/User Name */
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(result => {
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    /* Email+Password Registration */
    const handleRegistration = () => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    /* Email+Password Login */
    const handleLogin = () => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    /* Get Input Field */
    const getName = e => {
        setName(e?.target?.value);
    }
    const getEmail = e => {
        setEmail(e?.target?.value);
    }
    const getPassword = e => {
        setPassword(e?.target?.value);
    }

    /* Log Out */
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    /* Get the currently signed -in user */
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    return { user, error, isLoading, setError, setUser, setUserName, setIsLoading, loginUsingGoogle, loginUsingFacebook, getName, getEmail, getPassword, handleRegistration, handleLogin, logout }
};

export default useFirebase;