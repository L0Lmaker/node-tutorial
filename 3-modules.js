// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names');
const sayhi = require('./5-utils');
const data = require('./6-alternative-flavor');
//when importing a module, you also invoke it
require("./7-mind-grenade")
sayhi('susan');
sayhi(names.john);
sayhi(names.peter);