import firebase from 'firebase'


  const firebaseConfig = {
    apiKey: "AIzaSyD0OaH_taRkyO8NGk6ehM1nj5XozrG0QE4",
    authDomain: "railway-ticket-82d18.firebaseapp.com",
    projectId: "railway-ticket-82d18",
    storageBucket: "railway-ticket-82d18.appspot.com",
    messagingSenderId: "410582763311",
    appId: "1:410582763311:web:00ce1efec2eef67c3d03da"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;