const { Country } = require('../database/db.js');
// return a query
const allCountries = async () =>{
    return await Country.findAll();
};
module.exports = allCountries;
/** --------------------- EAGER LOADING AND LAZY LADING --------------- CONCEPTS*/
// LAZY loadig: obtener datos cuando realmente lo necesita, consulta mas pequenia.(diferida)
// EARG loading: obtener y buscar todos los datos a la vez, desde el principio y bajo una consulta mas amplia.
// carga ansiosa//
// const awesomeCaptain = await Captain.findOne({
//     where: {
//         name: "Jack Sparrow"
//     }
// });

// // Do stuff with the fetched captain
// console.log('Name:', awesomeCaptain.name);// name: roger
// console.log('Skill Level:', awesomeCaptain.skillLevel); // level : 5
// // Now we want information about his ship!
// // ahora queremos la informacion del barco del capitan en una relacion de one-to-one
// const hisShip = await awesomeCaptain.getShip();//use the method getShit();
// // Do stuff with the ship
// console.log('Ship Name:', hisShip.name);
// console.log('Amount of Sails:', hisShip.amountOfSails);
// ///remeber the relationship one - to - one;
// what is  a intances
//***=================== caraga ansiosa( use the options "include") eager ===================== */
// const awesomeCaptain = await Captain.findOne({
//     where: {
//         name: "Jack Sparrow"
//     },
//     include: Ship// use the sintaxis to inclue the ship
// });

/**--------------- CRUD WIHT ASOCITAITONS: IMPORTANTE----------------- */
// NOTA: SIN MIXINS:
// CREATE:
// use el methodo estandar para la creacion de instancias, pasandole el id foraneo respectivo
/**------------------ MIXINS ------------------------------ */
// cada carga diferida crea un metod como getModel() o setModeL() para las intancias automaticamnte.
/**
 * cuando existe una asocision entre dos modelos, las intancias obtienen automaticamente
 * metodos especiales que permiten interactuar con sus contraparts asociasiadas. Esto depende del tipo de asociacion entre 
 * cada modelo
- one -to - one (relationship)
    isntanceModel.getHisRelationModel(); => Foo ---- one to one relationship ---------- bar
    Foo.getBar();
    Foo.setBar();
    Foo.CreateBar();

- one - to - many  (relationship)
 */