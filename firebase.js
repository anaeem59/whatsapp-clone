import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB-RVwGJu52T_vLehDynTrW-pjvm68wwr0",
  authDomain: "whatsapp-clone-2ce72.firebaseapp.com",
  projectId: "whatsapp-clone-2ce72",
  storageBucket: "whatsapp-clone-2ce72.appspot.com",
  messagingSenderId: "1028089182793",
  appId: "1:1028089182793:web:f7c3b0c66b829b8eb05d98"
};

  const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig) 
    : firebase.app();

const db = app.firestore();

const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };