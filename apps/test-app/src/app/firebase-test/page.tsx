"use client";

import { EmailAuthProvider, GoogleAuthProvider, User } from "firebase/auth";
import { collection, collectionGroup, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../../../firebaseConfig";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";


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

  const [userList, setUserList] = useState<any>(null);

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

  useEffect(() => {
    const userCollection = collectionGroup(db, `user-info`);
    const getUsers = async () => {
      const collectiionQuery = query(userCollection, where("is_admin", "==", true));
      const querySnapshot = await getDocs(collectiionQuery);
      querySnapshot.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data());
      });

      const data = querySnapshot.docs.map((doc) => doc.data());
      setUserList(data);
    }

    getUsers();

  })

  // if (!isSignedIn) {
  //   return (
  //     <div>
  //       <h1>My App</h1>
  //       <p>Please sign-in:</p>
  //       <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
  //       <button onClick={handleClick}>Click Me</button>
  //     </div>
  //   );
  // }
  // return (
  //   <div>
  //     <h1>My App</h1>
  //     <p>Welcome {user?.displayName}! You are now signed-in!</p>
  //    <button onClick={handleClick}>Click Me</button>
  //     <button onClick={() => auth.signOut()}>Sign-out</button>
  //   </div>
  // );

  return (
    <>
      <h1>My App</h1>
      {isSignedIn && (
        <>
          <p>Welcome {user?.displayName}! You are now signed-in!</p>
          <button onClick={handleClick}>Click Me</button>
          <button onClick={() => auth.signOut()}>Sign-out</button>
        </>
      )}
      {
        !isSignedIn && (
          <>
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
              <button onClick={handleClick}>Click Me</button>
            </>
        )
      }
      <div>
        {
          JSON.stringify(userList)
        }
      </div>
    </>
  )
}
