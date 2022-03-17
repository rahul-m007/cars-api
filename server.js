const express       = require("express");
const cors          = require("cors");
const bodyParser    = require('body-parser');

const app = express();
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
 
// api routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to CAR API App." });
});
 
// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});