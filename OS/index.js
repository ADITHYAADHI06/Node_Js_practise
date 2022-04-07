const os = require("os");

console.log("my lap type " + os.type());

console.log("my lap arctitecture " + os.arch());

console.log(os.platform());

console.log(os.hostname());

console.log(os.tmpdir());

const freeMemory = os.freemem();
console.log(`${freeMemory / 1024 / 1024 / 1024}`);

const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024}`);
