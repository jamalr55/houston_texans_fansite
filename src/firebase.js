import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCv3Ck-lWiHL_mf0uwxbllrv4lBLRcM2A0",
  authDomain: "houston-texans.firebaseapp.com",
  databaseURL: "https://houston-texans.firebaseio.com",
  projectId: "houston-texans",
  storageBucket: "gs://houston-texans.appspot.com",
  messagingSenderId: "102472113458",
  appId: "1:102472113458:web:e8847164a5cbe9eee0cb2b",
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
