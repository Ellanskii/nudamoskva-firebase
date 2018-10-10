const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { Nuxt } = require("nuxt");
const express = require("express");
const app = express();

admin.initializeApp();
const firestore = admin.firestore();

const config = {
  dev: false,
  buildDir: "nuxt",
  build: {
    publicPath: "/assets/"
  }
};
const nuxt = new Nuxt(config);

function handleRequest(req, res) {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  return new Promise((resolve, reject) => {
    nuxt.render(req, res, promise => {
      promise.then(resolve).catch(reject);
    });
  });
}

app.use(handleRequest);
exports.nuxtssr = functions.https.onRequest(app);

// add new story to storyList collection
exports.createStory = functions.firestore
  .document("stories/{storyId}")
  .onCreate((snap, context) => {
    const id = context.params.storyId;
    firestore.doc(`storiesList/${id}`).set({
      title: snap.data().title,
      createdAt: snap.data().createdAt || admin.database.ServerValue.TIMESTAMP,
      geopoint: snap.data().geopoint || null,
      hasAudio: snap.data().audio ? true : false
    });
  });
