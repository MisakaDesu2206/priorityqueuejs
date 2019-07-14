import fs from "fs";

const files = fs.readdirSync(__dirname).filter(x => x !== "index.js");
export default files
  .map(x => `./${x}`)
  .map(require)
  .map(x => x.default);