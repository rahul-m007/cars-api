 const express       = require("express");
const cors          = require("cors");
const bodyParser    = require('body-parser');
const db            = require('./config/database');
const routes        = require('./api');

const app = express();
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
 

//force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
});
 
// api routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to CAR API App." });
});

app.use('/api', routes());
 
// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});