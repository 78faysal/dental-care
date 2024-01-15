/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { axiosSecure } from "../Hooks/useAxiosSecure";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update user
  const updateUser = (name, image) => {
    // setLoading(true);
    return updateProfile(auth?.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // google sign in
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //log out user
  const logOut = () => {
    // setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Obserbing user", currentUser);
      // setLoading(false);
      const userInfo = { email: currentUser?.email };
      if (currentUser) {
        axiosSecure
          .post("/jwt", userInfo)
          .then((res) => {
            if (res.data.token) {
              // console.log(res.data.token);
              localStorage.setItem("access-token", res.data.token);
              setLoading(false);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
  }, []);

  const authInfo = {
    loading,
    user,
    createUser,
    logInUser,
    updateUser,
    logOut,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
