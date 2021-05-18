// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names');
const sayhi = require('./05-utils');
const data = require('./06-alternative-flavor');
//when importing a module, you also invoke it
require("./07-mind-grenade")
sayhi('susan');
sayhi(names.john);
sayhi(names.peter);