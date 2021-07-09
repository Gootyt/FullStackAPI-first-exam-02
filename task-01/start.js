/**
 * 1. Töltsd be az index custom modulban található függvényeket.
 */

const {get, create, update, remove} = require('./index')

/**
 * Ez a tömb a tesztelést szolgálja, nincs vele teendőd.
 */
const painters = [{
  "id": 1,
  "firstName": "Red",
  "lastName": "Ewles",
  "artistAgent": "Twitterworks",
  "agentEmail": "rewles0@bloomberg.com",
  "paintingsForSale": 6
}, {
  "id": 2,
  "firstName": "Shannon",
  "lastName": "Rulten",
  "artistAgent": "Mydeo",
  "agentEmail": "srulten1@mtv.com",
  "paintingsForSale": 20
}, {
  "id": 3,
  "firstName": "Brier",
  "lastName": "Doget",
  "artistAgent": "Wikivu",
  "agentEmail": "bdoget2@tinyurl.com",
  "paintingsForSale": 22
}, {
  "id": 4,
  "firstName": "Dyana",
  "lastName": "Wadmore",
  "artistAgent": "Skiptube",
  "agentEmail": "dwadmore3@lulu.com",
  "paintingsForSale": 12
}, {
  "id": 5,
  "firstName": "Katherina",
  "lastName": "Jaze",
  "artistAgent": "Skippad",
  "agentEmail": "kjaze4@networkadvertising.org",
  "paintingsForSale": 21
}, {
  "id": 6,
  "firstName": "Tait",
  "lastName": "Innott",
  "artistAgent": "Kanoodle",
  "agentEmail": "tinnott5@youtube.com",
  "paintingsForSale": 22
}, {
  "id": 7,
  "firstName": "Junette",
  "lastName": "Faraday",
  "artistAgent": "Aivee",
  "agentEmail": "jfaraday6@blog.com",
  "paintingsForSale": 16
}, {
  "id": 8,
  "firstName": "Dyann",
  "lastName": "Rockwell",
  "artistAgent": "Oyoba",
  "agentEmail": "drockwell7@wisc.edu",
  "paintingsForSale": 14
}, {
  "id": 9,
  "firstName": "Tiler",
  "lastName": "McWhan",
  "artistAgent": "Skajo",
  "agentEmail": "tmcwhan8@buzzfeed.com",
  "paintingsForSale": 23
}, {
  "id": 10,
  "firstName": "Raychel",
  "lastName": "Szapiro",
  "artistAgent": "Voolia",
  "agentEmail": "rszapiro9@webmd.com",
  "paintingsForSale": 2
}]


/**
 * 2. Amint elkészültél, vedd ki a kommentből az alábbi kódblokkot, és tudod 
 * tesztelni a munkádat.
 */

console.log(get(painters, 2));

console.log(create(painters, {
    "firstName": "Frida",
    "lastName": "Kahlo",
    "agentEmail": "vooolia@webmd.com",
    "paintingsForSale": 6
}));

console.log(update(painters, {
    "id": 7,
    "firstName": "Pablo",
    "lastName": "Picasso"
}));

console.log(remove(painters, 3));


