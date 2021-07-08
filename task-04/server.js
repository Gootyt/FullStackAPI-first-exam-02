/**
 * 1. Töltsd be a szükséges modulokat a HTTP-kérésekhez és a functions getAll 
 * függvényét.
 */

// 2. Definiáld a port értékét 8080 -ra a port változóban.

/**
 * 3. Hozz létre egy HTTP-szervert.
 * A szerver get kérés esetén a getAll függvény segítségével lekéri a listát, 
 * majd beállítja a headert, hogy json a tartalom típusa, 
 * végül visszaküldi a kliensnek a listában tárolt adatokat.
 */
 const server = http.createServer( async (req, res) => {
    //
})
/**
 * 4. Állítsd be, hogy a szerver figyelje a port változóban definiált portot.
 */ 
 server.listen( port, () => {
    //
 });