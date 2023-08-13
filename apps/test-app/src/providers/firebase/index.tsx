"use client";

import {
  connectAuthEmulator,
  indexedDBLocalPersistence,
  inMemoryPersistence
} from "firebase/auth";
import { connectFirestoreEmulator } from "firebase/firestore";
import { auth, db } from "../../../firebaseConfig";

function getEmulatorHost() {
  // we can access these variables
  // because they are prefixed with "NEXT_PUBLIC_"
  const host = process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_HOST;
  const port = process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_PORT;

  return ["http://", host, ":", port].join("");
}

function isBrowser() {
  return typeof window !== "undefined";
}

export default function FirebaseProvider({
  children
}: React.PropsWithChildren) {
  // // make sure we're not using IndexedDB when SSR
  // // as it is only supported on browser environments
  const persistence = isBrowser()
    ? indexedDBLocalPersistence
    : inMemoryPersistence;

  const shouldConnectEmulator = process.env.NEXT_PUBLIC_EMULATOR === "true";

  if (shouldConnectEmulator) {
    const host = getEmulatorHost();
    auth.setPersistence(persistence);
    connectAuthEmulator(auth, host);
    connectFirestoreEmulator(
      db,
      process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_HOST || "",
      Number(process.env.NEXT_PUBLIC_FIRESTORE_EMULATOR_PORT)
    );
  }

  return <>{children}</>;
}
