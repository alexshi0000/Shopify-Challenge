var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/marketplace";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Marketplace created!");

  var dbo = db.db("marketplace");
  dbo.createCollection("products", function(err, res) {
    if (err) throw err;
    console.log("product collection created!");
    db.close();
  });
});
