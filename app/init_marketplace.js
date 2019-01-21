var path        = require('path')
var MongoClient = require('mongodb').MongoClient;
var url         = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var fs = require('fs');
  var text = JSON.parse(fs.readFileSync(__dirname + '/products.json', 'utf8'));
  var products = text.productArr;

  var dbo = db.db("marketplace");

  dbo.collection("products").insertMany(products, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    console.log(res.insertedIds);
    console.log(res.ops);
    console.log(res.result);
    db.close();
  });
});
