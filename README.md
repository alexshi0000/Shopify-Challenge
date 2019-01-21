# Shopify-Challenge
My Summer 2019 Developer Intern Challenge for Shopify

**Author**:  Alex (Yu An) Shi<br>
**Student**: ID: 20765342<br>
**Program**: University of Waterloo, Honours Computer Science (Co-op)

After you are done with the following, feel free to check out my other projects!

## Task Checklist: Build the barebones of an online marketplace

- [x] build a server side web api that can be used to fetch products either one at a time or all at once
- [x] Every product should have a title, price, and inventory\_count
- [x] Querying for all products should support passing an arguement to only return products with available inventory
- [ ] Products should be able to be "purchased" which should reduce the inventory by 1.
- [ ] Products with no inventory cannot be purchased.

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
- run the following command
```bash
nvm use 10 #or newer version
```

## Setup DB
- creating and initializing DB
```
npm run create_market
npm run populate_market
```
- note: If you would like to use different products then you can provide a json in
place of app/products.json. Just make sure that the array name is "productArr"
and each product has a title, price, and inventory\_count

- Now you are all set up and ready to go!

## Using the Server Api

### Adding Products

### Fetching Products

