var reactDocs = require('react-docgen');
var path = require("path")
var fs = require("fs")
const src = fs.readFileSync(path.resolve(__dirname, "src", "Other.tsx"), "utf8")
var componentInfo = reactDocs.parse(src);
console.log(componentInfo)