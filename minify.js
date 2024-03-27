const fs = require("fs");
const { minify } = require("csso");

// Read the CSS file
const css = fs.readFileSync("/Users/randyyono/Desktop/csso/test.css", "utf8");

// Minify the CSS
const minifiedCss = minify(css).css;

// Write the minified CSS to a new file
fs.writeFileSync("/Users/randyyono/Desktop/csso/output-test.css", minifiedCss);

console.log("CSS minified successfully!");
