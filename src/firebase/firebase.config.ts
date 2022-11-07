import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCOo3gvwcNAzUzxPhzjnhNaWm3fSbL40pE',
  authDomain: 'pod-jogar.firebaseapp.com',
  projectId: 'pod-jogar',
  storageBucket: 'pod-jogar.appspot.com',
  messagingSenderId: '321776692011',
  appId: '1:321776692011:web:dcdd91e9a931736028736e',
  measurementId: 'G-KM7ELQ2H3C',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default app;
