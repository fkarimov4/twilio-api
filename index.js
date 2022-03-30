require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { sendMessage } = require("./functions");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post("/send-message", sendMessage);

app.listen(port, () => console.log(`Listening on port ${port}!`));
