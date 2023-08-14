"use client";

import { EmailAuthProvider, GoogleAuthProvider, User } from "firebase/auth";
import { collection, collectionGroup, doc, getDocs, query, setDoc, where } from "firebase/firestore";
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
  const [adminUsers, setAdminUsers] = useState<any>([]);
  const [nonAdminUsers, setnonAdminUsers] = useState<any>([]);
  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged((loggedInUser) => {

      const getAdminUsers = async (isAdmin: boolean) => {
        const usersRef = collectionGroup(db, "user-info");
        const q = query(usersRef, where("is_admin", "==", isAdmin));
        const adminUsersRaw = await getDocs(q);
        const adminUsersExact = adminUsersRaw.docs.map((doc) => {
          return doc.data();
        });
        return adminUsersExact;
      }

      const populateAdmins = async () => {
        const adminUsers = await getAdminUsers(true);
        setAdminUsers(adminUsers);
        const nonAdminUsers = await getAdminUsers(false);
        setnonAdminUsers(nonAdminUsers);
      }
      setIsSignedIn(!!loggedInUser);
      if (loggedInUser) {
        setUser(loggedInUser)
        populateAdmins();
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
        <button onClick={handleClick}  className="bg-pink-100 p-2 rounded-md">Click Me</button>

      </div>
    );
  }
  return (
    <div>
      <h1>My App</h1>
      <p>Welcome {user?.displayName}! You are now signed-in!</p>
      <button onClick={() => auth.signOut()} className="bg-pink-100 p-2 rounded-md">Sign-out</button>
        {JSON.stringify(adminUsers)}
        {JSON.stringify(nonAdminUsers)}
    </div>
  );
}
