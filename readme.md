# Readme

Install it:
```
git clone https://github.com/millette/feverish-v3.git
cd feverish-v3
yarn install
```

Create and edit ```.env``` file with:
```
TEMPLATE_CACHE=true
DBUSER=[DATABASE ADMIN USERNAME]
DBPW=[DATABASE PASSWORD FOR ADMIN]
DBURL=http://localhost:5984/ # or your couchdb server address, including port
```

Start it:
```
yarn start
```
