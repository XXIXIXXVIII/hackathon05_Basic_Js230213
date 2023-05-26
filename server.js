const express = require('express')
const app = express()
const port = 4000
const database = require('./sqlConect')
const bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  database.query('SELECT * FROM todoapp', (error, results, fields) => {
    if (error) {
      console.error('Lỗi truy vấn: ', error);
      res.status(400).json(error)
      return error
    } else {
      console.log('Kết quả truy vấn: ', results);
      res.status(200).send(results)
    }
  });

})

app.post('/', (req, res) => {

  let {nametodo} = req.body
  let NewTodoItem = [nametodo]

  database.query(`Insert into todoapp (nametodo) values (?)`,NewTodoItem, (error) => {
    if (error) {
      console.error('Lỗi truy vấn: ', error);
    } else {
      console.log('Kết quả truy vấn: ');
    }
  });
  res.status(200).send("ok")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})