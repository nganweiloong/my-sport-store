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
  const [totalProduct, setTotalProduct] = useState();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function fsCollection(credential, email, username, password) {
    fs.collection("userInfo").doc(credential.user.uid).set({
      Username: username,
      Email: email,
      Password: password,
    });
  }

  function logout() {
    return auth.signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (user) {
        setUuid(user.uid);
        fs.collection("userInfo")
          .doc(user.uid)
          .get()
          .then((info) => {
            setUsername(info.data().Username);
          });

        fs.collection(`Cart ${user.uid}`).onSnapshot((snapshot) => {
          setTotalProduct(snapshot.docs.length);
          const newCartProduct = snapshot.docs.map((doc) => ({
            ID: doc.id,
            ...doc.data(),
          }));
          setCartProducts(newCartProduct);
        });
      } else {
        setUsername(null);
        setUuid(null);
        setCartProducts([]);
        setTotalProduct(null);
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
    totalProduct,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
