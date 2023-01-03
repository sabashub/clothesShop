import {initializeApp} from 'firebase/app'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD11sW_iBsZZGR_vbrJU3QlNjJuMIIlsbo",
    authDomain: "clothessjop.firebaseapp.com",
    projectId: "clothessjop",
    storageBucket: "clothessjop.appspot.com",
    messagingSenderId: "330154435915",
    appId: "1:330154435915:web:542f9986b8e6bc549774ce"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  })

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)