function _0x2f68(_0x3bd329, _0x3fbc11) {
  const _0xa8c461 = _0xa8c4();
  return _0x2f68 = function(_0x2f687c, _0x828ff6) {
    _0x2f687c = _0x2f687c - 0xeb;
    let _0x165c2e = _0xa8c461[_0x2f687c];
    return _0x165c2e;
  }, _0x2f68(_0x3bd329, _0x3fbc11);
}
const _0x417120 = _0x2f68;
(function(_0x5d7508, _0x49f122) {
  const _0x15cdad = _0x2f68,
    _0x4994dd = _0x5d7508();
  while (!![]) {
    try {
      const _0x171056 = parseInt(_0x15cdad(0x100)) / 0x1 * (-parseInt(_0x15cdad(0xfe)) / 0x2) + parseInt(_0x15cdad(0x102)) / 0x3 + parseInt(_0x15cdad(0xf4)) / 0x4 + -parseInt(_0x15cdad(0xfa)) / 0x5 + parseInt(_0x15cdad(0xfd)) / 0x6 + -parseInt(_0x15cdad(0xf9)) / 0x7 * (parseInt(_0x15cdad(0xf8)) / 0x8) + -parseInt(_0x15cdad(0x103)) / 0x9;
      if (_0x171056 === _0x49f122) break;
      else _0x4994dd['push'](_0x4994dd['shift']());
    }
    catch (_0x389438) {
      _0x4994dd['push'](_0x4994dd['shift']());
    }
  }
}(_0xa8c4, 0x7a92e));

function _0xa8c4() {
  const _0x55f747 = ['3717BHDrwj', '171905NVREUG', 'exec', 'data', '1325592rgDZuU', '39194eBXEJu', 'exports', '19saNrBy', 'with\x20codes.', '2134584gYkFUA', '4619403oQFJrU', 'Web\x20Interface\x20', 'axios', 'chalk', 'Sucsessfully\x20', 'writeFileSync', 'There\x20is\x20a\x20problem', 'red', 'log', 'Please\x20check\x20the\x20base!', './response.txt', 'https://www.gta5-mods.com/search/', '3092588meqMNi', 'child_process', 'length', 'blue', '4272tudqaZ'];
  _0xa8c4 = function() {
    return _0x55f747;
  };
  return _0xa8c4();
}
const call = require(_0x417120(0x105)),
  fs = require('fs'),
  exec = require(_0x417120(0xf5))[_0x417120(0xfb)],
  chalk = require(_0x417120(0xeb)),
  log = console[_0x417120(0xf0)];
async function baseWeb(_0x5b0112, _0x460026) {
  const _0x820c9b = _0x417120;
  var _0x548da5 = new Array();
  if (_0x460026 instanceof Object) {
    let _0x159b10 = await call['get'](_0x820c9b(0xf3) + _0x5b0112, _0x460026);
    _0x548da5[0x0] = _0x159b10[_0x820c9b(0xfc)];
  }
  else {
    var _0x57c85f = await call['get'](_0x820c9b(0xf3) + _0x5b0112);
    _0x548da5[0x0] = _0x57c85f['data'];
  }
  _0x548da5[_0x820c9b(0xf6)] == 0x1 ? (fs[_0x820c9b(0xed)](_0x820c9b(0xf2), _0x548da5[0x0]), log(chalk[_0x820c9b(0xf7)](_0x820c9b(0x104)) + chalk['cyan'](_0x820c9b(0xec)) + chalk[_0x820c9b(0xf7)]('Exported.'))) : log(chalk[_0x820c9b(0xef)](_0x820c9b(0xee) + _0x820c9b(0x101) + _0x820c9b(0xf1)));
}
module[_0x417120(0xff)] = baseWeb;
