# Shopify-Challenge
My Summer 2019 Developer Intern Challenge for Shopify

**Author**:  Alex (Yu An) Shi<br>
**Student**: ID: 20765342<br>
**Program**: University of Waterloo, Honours Computer Science (Co-op)

After you are done with the following, feel free to check out my other projects!

## Task Checklist: Build the barebones of an online marketplace

- [ ] build a server side web api that can be used to fetch products either one at a time or all at once
- [ ] Every product should have a title, price, and inventory\_count
- [ ] Querying for all products should support passing an arguement to only return products with available inventory
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

## Using the Server

### Adding Products

### Fetching Products


## Running the Demo Pages
I made two demo pages with front end just for fun. If you find any bugs
or errors (hopefully not :P) feel free to open an issue in this repo
and I will try my best to fix the problem ASAP.

### Buyer (adding products to marketplace)

### Seller (buying products from marketplace)
