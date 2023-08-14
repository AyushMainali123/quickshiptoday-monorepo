"use client";

import { EmailAuthProvider, GoogleAuthProvider, User } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { auth, db } from "../../../firebaseConfig";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Google and Facebook as auth providers.
  signInOptions: [GoogleAuthProvider.PROVIDER_ID, EmailAuthProvider.PROVIDER_ID]
};
export default function FirebaseTest() {
  const handleClick = async () => {
    // await addDoc(collection(db, "test"), {
    //   value: "apple"
    // });

    const collectionRef = collection(db, "text");
    const document = doc(collectionRef, "apple");
    await setDoc(document, { name: "apple" });
  };
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  const [user, setUser] = useState<User | null>(null);

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged((loggedInUser) => {
      setIsSignedIn(!!loggedInUser);
      if (loggedInUser) {
        setUser(loggedInUser);
      }
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        <button onClick={handleClick}>Click Me</button>
      </div>
    );
  }
  return (
    <div>
      <h1>My App</h1>
      <p>Welcome {user?.displayName}! You are now signed-in!</p>
      <button onClick={() => auth.signOut()}>Sign-out</button>
    </div>
  );
}
