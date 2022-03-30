require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Ahoy mate 🏴‍☠️',
     from: '+18645278376',
     to: '+19173929054'
   })
  .then(message => console.log(message));