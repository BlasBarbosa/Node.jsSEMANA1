const express = require('express');
const app = express();

//import "db" from Utils
const { db } = require('./utils/database');

//import Routs from Routes
const { usersRouter } = require('./routes/users.routes');
const { repairsRouter } = require('./routes/repairs.routes');

//Enable incoming JSON DATA
app.use(express.json());

//Home page
app.use(express.static(__dirname + '/public'));

//Endpoints
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/users/:id', usersRouter);
app.use('/api/v1/repairs', repairsRouter);

//DB Authentication
db.authenticate()
  .then(() => console.log('Data base authenticated'))
  .catch(err => console.log(err));

db.sync()
  .then(() => console.log('sync authenticated'))
  .catch(err => console.log(err));

// Server is running on PORT 1111, and the terminal send messege.
const PORT = 1111;
app.listen(PORT, () => {
  console.log(`App server is running on Port ${PORT}...`);
});
