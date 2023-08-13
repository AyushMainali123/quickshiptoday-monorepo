"use strict";
/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.onUserAccountDeleted = exports.onNewUserAccountCreated = exports.helloWorld = void 0;
const functions = require("firebase-functions");
const https_1 = require("firebase-functions/v2/https");
// Start writing functions
// https://firebase.google.com/docs/functions/typescript
// import { app, initializeApp } from "firebase-admin";
const initialize_firebase_admin_1 = require("./initialize-firebase-admin");
initialize_firebase_admin_1.admin;
// function initializeAdminApp() {
//   let admin: app.App | null = null;
//   return function () {
//     if (!admin) {
//       admin = initializeApp();
//     }
//     return admin;
//   }
// }
// const adminApp = initializeAdminApp();
// const admin = adminApp();
exports.helloWorld = (0, https_1.onRequest)((request, response) => {
    console.log("HELLO WORLD", 5);
});
exports.onNewUserAccountCreated = functions.auth.user().onCreate((user) => {
    const currentTime = new Date().getTime();
    const isAdmin = Math.random() > 0.5;
    initialize_firebase_admin_1.firestore.doc(`/users/${user.uid}/user-info/basic-information`).set({
        created_at: currentTime,
        updated_at: currentTime,
        is_deactivated_account: false,
        is_admin: isAdmin,
        display_name: user.displayName || 'User',
        email: user.email || null
    });
    return true;
});
exports.onUserAccountDeleted = functions.auth.user().onDelete((user) => {
    initialize_firebase_admin_1.firestore.doc(`/users/${user.uid}/user-info/basic-information`).update({
        is_deactivated_account: true,
    });
    return true;
});
//# sourceMappingURL=index.js.map