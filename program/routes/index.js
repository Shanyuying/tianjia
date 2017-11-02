var express = require('express');
var router = express.Router();
var mysql=require('mysql')
var connection=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'yingying',
    database:'yingying'
})


/* GET home page. */
router.post('/', function(req, res, next) {
 res.header('Access-Control-Allow-Origin','*')
    connection.query('SELECT * FROM index1',function (err, rows, fileds) {
        res.send(rows)
    })
});
router.post('/btn',function (req, res, next) {
    res.header('Access-Control-Allow-Origin','*')
    connection.query(`INSERT INTO index1 (name,age) VALUES ('${req.body.name}','${req.body.age}')`,function (err, rows, fileds) {
        if(rows != ''|| rows != null){
        connection.query('SELECT * FROM index1',function (err, rows, fileds) {
           res.send(rows)
            })	
        }
    })
})
module.exports = router;
