import Twitter from "twitter";
require('dotenv-safe').config();

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

export default class TwitterService {

  static async getTweetsByHashtag(hashtag) {
    await client.get("search/tweets", {q: hashtag}, (err, tweets, response) => {
      // TODO: add logic to train Brain.js
      console.log(tweets);
    });
  }
}
