/**
 * 1. Töltsd be a json-állományok kezelését végző modult az azonos mappából, és 
 * emeld ki egy változóba a get metódusát.
 */
const { get } = require('./app');
/**
 * 2. A teszteléshez vedd ki a kommentblokkból az alábbi kódot.
 */

( async () => {
    console.log( await get(8) );
})();

