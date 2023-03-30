//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/server/app.js');
const { conn } = require('./src/database/db.js');
const chalk = require('chalk');
const loadData = require('./src/scripts/utils/saveDataInDB.js');
// Syncing all the models at once.
conn
  .sync({ force: true })
  .then(() => console.log(chalk.blueBright("In processs....")))
  .then(() => {
    server.listen(3001, () => {
      console.log('%s ' + chalk.blue('Listening at ') + chalk.magenta('3001: ') + chalk.cyan.underline(' (^_^) !.')); // eslint-disable-line no-console
    });
  })
  .then(() => loadData())
  .then(()=> console.log('Your database is working & ready!'))
  .then(()=>console.log(chalk.magenta("Server ready!")))
  .catch((error)=> console.log(error));
