var path    = require('path')
var express = require('express')
var app     = express()
var http    = require('http').Server(app)

var MongoClient = require('mongodb').MongoClient;
var url         = "mongodb://localhost:27017/";

app.get('/api/fetch/:id', (req, res) => {
  console.log("fetching " + req.params.id);

  MongoClient.connect(url, (err, db) => {
    if (err)
      throw err;
    var dbo = db.db('marketplace');
    var query = { title: req.params.id };
    dbo.collection('products').find(query, {projection: { _id : 0 }}).toArray((err, result) => {
      if (err)
        throw err;
      if (result.length != 0) {
        console.log('found: ' + result);
        res.status(200).json(result); //success
      }
      else {
        console.log('not found');
        res.status(400).json({ error:"item not found" }) //item was not found
      }
      db.close();
    });
  });
});

app.get('/api/fetch-all', (req, res) => {
  console.log("fetching-all");

  MongoClient.connect(url, (err, db) => {
    if (err)
      throw err;
    var dbo = db.db('marketplace');

    dbo.collection('products').find({}, {projection: { _id : 0 }}).toArray((err, result) => {
      if (err)
        throw err;
      if (result.length != 0) {
        console.log('found all');
        res.status(200).json(result);
      }
      else {
        console.log('no products in marketplace');
        res.status(400).json( { error:"no products found" } );
      }
      db.close();
    });
  })
});

app.get('/api/fetch-all/:filter', (req, res) => {
  console.log("fetching-all");

  MongoClient.connect(url, (err, db) => {
    if (err)
      throw err;
    var dbo = db.db('marketplace');
    var query = {}; //query all
    if (req.params.filter === 'true')
      //if we should filter the items with no inventory
      query = { inventory_count: {$gt: 0} }

    dbo.collection('products').find(query, {projection: { _id : 0 }}).toArray((err, result) => {
      if (err)
        throw err;
      if (result.length != 0) {
        console.log('found all');
        res.status(200).json(result);
      }
      else {
        console.log('no products in marketplace');
        res.status(400).json( { error:"no products found" } );
      }
      db.close();
    });
  })
});

app.post('/api/purchase/:product_id', (req, res) => {
  console.log('attempting to purchase ' + req.params.product_id);

  MongoClient.connect(url, (err, db) => {
    if (err)
      throw err;

    var dbo = db.db('marketplace');
    var query = { title : req.params.product_id }; //query all

    dbo.collection('products').find(query, {projection: { _id : 0 }}).toArray((err, result) => {
      if (err)
        throw err;

      if (result.length > 0 && result[0].inventory_count > 0) {
        console.log('purchase made!');

        dbo.collection('products').update(query, {$inc : { inventory_count : -1}});
        dbo.collection('products').find(query, {projection: { _id : 0 }}).toArray((err, result) => {
          if (err) throw err
          res.status(400).json(result[0]); //success
        });
      }
      else {
        console.log('invalid purchase made, either no such product, or no inventory');
        res.status(200).json( { error:"no such product or no inventory" } );
      }
      db.close();
    });
  });
});

http.listen(3000, () => {
  console.log('server is running, now accepting requests');
  console.log('endpoint at: http://localhost:3000/');

  console.log();

  console.log('use the following commands to fetch items:');

  console.log('  - curl -X GET localhost:3000/api/fetch/product_id');
  console.log('    replacing product_id with the product');

  console.log();

  console.log('  - curl -X GET localhost:3000/api/fetch-all/false');
  console.log('    instead of fetching one product, fetches all products');

  console.log();
  console.log('  - curl -X GET localhost:3000/api/fetch-all/true');
  console.log('    filters fetch-all to only include products with inventory');

  console.log();
  console.log('use the following commands to purchase items:');
  console.log('  - curl -X POST localhost:3000/api/purchase/product_id');
});

