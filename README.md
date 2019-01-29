# Shopify-Challenge
My Summer 2019 Developer Intern Challenge for Shopify

**Author**:  Alex (Yu An) Shi<br>
**Program**: University of Waterloo, Honours Computer Science (Co-op)

After you are done with the following, feel free to check out my other projects!

## Task Checklist: Build the barebones of an online marketplace

- [x] build a server side web api that can be used to fetch products either one at a time or all at once
- [x] Every product should have a title, price, and inventory\_count
- [x] Querying for all products should support passing an arguement to only return products with available inventory
- [x] Products should be able to be "purchased" which should reduce the inventory by 1.
- [x] Products with no inventory cannot be purchased.

## Next Steps:

- [ ] Fit product purchases into the context of a simple shopping cart
- [ ] Cart creation
- [ ] Adding products to the cart
- [ ] Items with no inventory cannot be added to cart
- [ ] Completing the cart
- [ ] List included products, a total dollar amount
- [ ] Product inventory decrease after cart is completed

## Setup Server
- make sure mongodb is installed using the package manager of your choice
- for example on Ubuntu you would type:
```
sudo apt install mongodb
```
- and on mac:
```
brew install mongodb
```

- clone this repo
```
git clone https://github.com/alexshi0000/Shopify-Challenge
```

- navigate to the folder
```
cd Shopify-Challenge
```

- make sure you have the latest stable version for npm and nvm
- https://github.com/creationix/nvm
- run the following command
```bash
nvm use 10 #or newer version
```

## Setup DB
- install dependencies (express and mongodb)
```
npm install
```
- creating and initializing DB
```
npm run create_market
npm run populate_market
```
- note: If you would like to use different products then you can provide a json in
place of app/products.json. Just make sure that the array name is "productArr"
and each product in the array has a title, price, and inventory\_count

- Now you are all set up and ready to go!

## Using the Server Api

### Run
```
npm start
```

### Fetching Products
- open another terminal
- use the following commands to test fetching items
```bash
curl -X GET localhost:3000/api/fetch/title     #replace title to fetch single item
curl -X GET localhost:3000/api/fetch-all/false #fetches all products
curl -X GET localhost:3000/api/fetch-all/true  #fetches all products with inventory
```

### Purchasing Products
- use the following commands to purchase items
```bash
curl -X POST localhost:3000/api/purchase/title #replace title
```
