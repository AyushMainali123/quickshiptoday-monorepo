/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from "firebase-functions";
import { setGlobalOptions } from "firebase-functions/v2";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// import { app, initializeApp } from "firebase-admin";
import { firestore } from "./initialize-firebase-admin";

setGlobalOptions({ maxInstances: 10 });

export const onNewUserAccountCreated = functions.auth
  .user()
  .onCreate((user) => {
    const currentTime = new Date().getTime();
    const isAdmin = Math.random() > 0.5;

    firestore.doc(`/users/${user.uid}/user-info/basic-information`).set({
      created_at: currentTime,
      updated_at: currentTime,
      is_deactivated_account: false,
      is_admin: isAdmin,
      display_name: user.displayName || "User",
      email: user.email || null
    });
    return true;
  });

export const onUserAccountDeleted = functions.auth.user().onDelete((user) => {
  firestore.doc(`/users/${user.uid}/user-info/basic-information`).update({
    is_deactivated_account: true
  });
  return true;
});
