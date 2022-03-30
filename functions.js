require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

exports.sendMessage = (req, res) => {
  const userNumber = req.body.userNumber;
  client.messages
    .create({
      body: "Ahoy mate 🏴‍☠️",
      from: "+18645278376",
      to: userNumber,
    })
    .then((message) => console.log(message))
    .then( () => res.status(200).send("Message sent!"))
    .catch((err) => console.log(err));
};