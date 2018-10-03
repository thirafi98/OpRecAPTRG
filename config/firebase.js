var admin = require("firebase-admin");

var serviceAccount = require("./oprec-aptrg2k18.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://oprec-aptrg2k18.firebaseio.com/"
});

module.exports = admin; //buat direuse tinggal require('./config/firebase.js');