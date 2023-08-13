import {  App, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getDatabase } from "firebase-admin/database";
import { getFirestore } from "firebase-admin/firestore";

function initializeAdminApp() {
  let admin: App | null = null;
  return function () {
    if (!admin) {
      admin = initializeApp();
    }
    return admin;
  }
}

const adminApp = initializeAdminApp();

export const admin = adminApp();

export const database = getDatabase(admin);
export const auth = getAuth(admin);
export const firestore = getFirestore(admin);

