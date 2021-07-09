const drugController = require('../controller/drugController');

/**
 * 1. Készíts egy router objektumot, amely a get kulcsnál meghívja a drugController 
 * getAll nevű metódusát, és string típusúként visszaadja az adatok tömbjét.
 */
 const router = {
    'get': async (res) => res.end(JSON.stringify(await drugController.getAll(), null, 4))
};
/**
 * 2. A module az előző pontnál elkészített router objektumot adja vissza.
 */

module.exports = router;
