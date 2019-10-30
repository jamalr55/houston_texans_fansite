import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: <ADD firebase apiKey>,
  authDomain: <ADD firebase authDomain>,
  databaseURL: <ADD firebase databaseURL>,
  projectId: <ADD firebase projectId>,
  storageBucket: <ADD firebase storageBucket>,
  messagingSenderId: <ADD firebase messagingSenderId>,
  appId: <ADD firebase apiId>,
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebasePlayers,
  firebaseDB
};
