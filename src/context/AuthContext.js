import React, { useContext, useState, useEffect } from "react";

import { auth, fs } from "../Config/firebase";

const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState();
  const [uuid, setUuid] = useState();
  const [cartProducts, setCartProducts] = useState([]);

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
      if (user) {
        console.log("running authstate2");
        setUuid(user.uid);
        fs.collection("userInfo")
          .doc(user.uid)
          .get()
          .then((info) => {
            setUsername(info.data().FullName);
          });

        fs.collection(`Cart ${user.uid}`).onSnapshot((snapshot) => {
          const newCartProduct = snapshot.docs.map((doc) => ({
            ID: doc.id,
            ...doc.data(),
          }));
          setCartProducts(newCartProduct);
        });
      } else {
        console.log("running authstate2-else");
        setUsername(null);
        setUuid(null);
        setCartProducts([]);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);
  const value = {
    currentUser,
    signup,
    login,
    logout,
    fsCollection,
    username,
    uuid,
    cartProducts,
    setCartProducts,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
