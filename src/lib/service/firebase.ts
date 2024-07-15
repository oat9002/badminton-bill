import { FIREBASE_CONFIG } from '$env/static/private';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp(JSON.parse(FIREBASE_CONFIG));

export const fireStore = getFirestore(firebaseApp);
