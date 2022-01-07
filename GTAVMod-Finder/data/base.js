const call = require('axios');                               
const fs = require('fs')
const exec = require('child_process').exec;
const chalk = require('chalk');
const log = console.log

async function base(model, lawfi) {
  var pre = new Array;
  if (lawfi instanceof Object) {
    let simp = await call.get(
      'https://www.gta5-mods.com/search/' + model, lawfi
    )                                                             
    pre[0] = simp.data
  } else {
    var load = await call.get(
      'https://www.gta5-mods.com/search/' + model
    )
    pre[0] = load.data
  }
  if (pre.length == 1) {
    fs.writeFileSync(
      './response.txt',
      pre[0]
    )
    log(
      chalk.blue(
        'Web Interface '
      ) + chalk.cyan(
        'Sucsessfully '
      ) + chalk.blue(
        'Exported.'
      )
    )
  } else {
    log(
      chalk.red(
        'There is a problem' +
        'with codes.' +
        'Please check the base!'
      )
    )
  }
}
module.exports = base
