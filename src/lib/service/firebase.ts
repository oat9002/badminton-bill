import { FIREBASE_CONFIG } from '$env/static/private';
import { initializeApp } from 'firebase/app';

export const firebaseApp = initializeApp(JSON.parse(FIREBASE_CONFIG));
