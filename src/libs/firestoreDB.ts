import { Firestore } from "@google-cloud/firestore";

export const getFirestoreDB = (): FirebaseFirestore.Firestore => {
  const FIRESTORE_CREDENTIALS = JSON.parse(process.env.FIRESTORE_CREDENTIALS!);
  return new Firestore({
    projectId: FIRESTORE_CREDENTIALS.project_id,
    credentials: FIRESTORE_CREDENTIALS,
  });
};
