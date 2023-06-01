const express = require('express'),
      dbOperation = require('./dbFiles/dbOperation'),
      cors = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();

let client;
let session;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/getemp', async(req, res) => {
  console.log('called /getemp');
  const result = await dbOperation.getEmployees(req.body.name);
  console.log('   FILE: server.js');
  console.log(result);
  res.send(result);
  // res.send({result: 'api'});
})

app.post('/createemp', async(req, res) => {
  console.log('called /getemp');
  await dbOperation.createEmployee(req.body);
  const result = await dbOperation.getEmployees(req.body.Firstname);
  console.log('   FILE: server.js');
  console.log(result);
  res.send(result);
  // res.send({result: 'api'});
})

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));