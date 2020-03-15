const config = {
  apiKey: "AIzaSyBos0RSyKADMqywXGnelYqOCF6Og1XKAFM",
  authDomain: "listvitinn.firebaseapp.com",
  databaseURL: "https://listvitinn.firebaseio.com",
  projectId: "listvitinn",
  storageBucket: "listvitinn.appspot.com",
  messagingSenderId: "237745767746",
  appId: "1:237745767746:web:69dbdcee2e5604d21774db",
  measurementId: "G-RW1E4WJT9G",
}

let firebaseCache: any

export const getFirebase = (firebase: any) => {
  if (firebaseCache) {
    return firebaseCache
  }
  firebase.initializeApp(config)
  firebaseCache = firebase
  return firebase
}
