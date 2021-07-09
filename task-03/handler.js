/**
 * 1. A fájlok kezeléséhez az fs modul promise-alapú verzióját használd.
 */
const fsp = require('fs').promises;
const { join } = require('path');
/**
 * 2. Állítsd be az azonos mappában található .json-fájl elérési útját a path 
 * modul join metódusának segítségével.
 */

 const jsonPath = join(__dirname, 'db', 'construction.json');

 /**
  * 3. A jsonPath útvonalon található fájl tartalmát beolvassa és értelmezi, 
  * majd visszaadja a kapott tömböt.
  * @returns objektumok tömbje
  */
 const getList = async () => {
    const content = await fsp.readFile(jsonPath, 'utf-8')
    return JSON.parse(content)
 };

/**
 * 4. A kapott tömböt json formátumúra alakítja és beleírja a jsonPath útvonalon 
 * található fájlba.
 * @param {Array} list objektumok tömbje
 * @returns 
 */
const saveList = async (list = []) => {
    await fsp.writeFile(jsonPath, JSON.stringify(list, null, 4), 'utf-8')
    return true
};

/**
 * 5. Frissíti az id alapján kiválasztott entitást és visszaírja a .json-fájlba.
 * A .json-állomány írásához a saveList segédfüggvényt használd.
 * @param {Array} list objektumok tömbje
 * @param {*} entity egy id tulajdonsággal rendelkező objektum
 * @returns a frissített objektum, ha sikerült a frissítés, egyébként false
 */
const update = async (entity = {}) => {
    
    const list = await getList()
    
    if (list.length <1 || !entity.id){
        return false;
    }

    const index = list.findIndex(item => item.id === entity.id)
    list[index] = {...list[index], ...entity}
    
    await saveList(list)
    
    return list[index]

};

module.exports = {
    update,
};
