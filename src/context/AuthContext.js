import React, { useContext, useState, useEffect } from "react";

import { auth, fs } from "../Config/firebase";

const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function fsCollection(credential, email, fullName, password) {
    fs.collection("userInfo").doc(credential.user.uid).set({
      FullName: fullName,
      Email: email,
      Pssword: password,
    });
  }

  function logout() {
    return auth.signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("running authstate");
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);
  const value = { currentUser, signup, login, logout, fsCollection };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
