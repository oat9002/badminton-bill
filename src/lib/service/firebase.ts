import { PUBLIC_FIREBASE_CONFIG } from '$env/static/public';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp(JSON.parse(PUBLIC_FIREBASE_CONFIG));

export const fireStore = getFirestore(firebaseApp);
