import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

import axios from "axios";

import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googlePrivider = new GoogleAuthProvider();

  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");

        // setting new user
        const newUser = { email, displayName: name };
        setUser(newUser);

        // Save user to database
        saveUser(email, name);

        // Update user profile
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            setAuthError("");
          })
          .catch((err) => {
            console.log(err.message);
            setAuthError(err.message);
          });
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        setAuthError(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  const logInUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError("");
      })
      .catch((err) => {
        console.log(err.message);
        setAuthError(err.message.slice(22, -2));
      })
      .finally(() => setIsLoading(false));
  };

  const signInUsingGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googlePrivider)
      .then((result) => {
        const user = result.user;

        // put user to database
        putUser(user.email, user.displayName);

        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError("");
      })
      .catch((err) => {
        console.log(err.message);
        setAuthError(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  useEffect(() => {
    axios
      .get(`https://secret-plateau-62422.herokuapp.com/users/${user.email}`)
      .then((res) => {
        setAdmin(res.data.admin);
      });
  }, [user.email]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => {
        console.log(err.message);
        setAuthError(err.message);
      });
  };

  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    axios
      .post("https://secret-plateau-62422.herokuapp.com/users", user)
      .then((res) => {
        console.log(res.data);
      });
  };

  const putUser = (email, displayName) => {
    const user = { email, displayName };
    axios
      .put("https://secret-plateau-62422.herokuapp.com/users", user)
      .then((res) => {
        console.log(res.data);
      });
  };

  return {
    user,
    admin,
    authError,
    isLoading,
    registerUser,
    logInUser,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
