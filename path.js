//os
// const os = require("os");
console.log(os.totalmem());
console.log(os.type());

//path
const path = require("path");
const a = path.dirname("/foo/bar/baz/asdf/quux");
const b = path.join("foo" + "bar");
console.log(a, b);
