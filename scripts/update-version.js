const { globSync } = require("glob");
const { writeFileSync, readFileSync } = require("fs");

const VERSION_RGX = /(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)/;
const versionArgument = process.argv.slice(2).find((arg) => VERSION_RGX.test(arg));
if (!versionArgument) {
  process.exit(1);
}
const { major, minor, patch } = VERSION_RGX.exec(versionArgument).groups;
const version = `${major}.${minor}.${patch}`;

globSync("**/package.json", { ignore: "node_modules/*" }).forEach((file) => {
  const content = JSON.parse(readFileSync(file, { encoding: "utf-8", flag: "r" }));
  content.version = version;
  writeFileSync(file, JSON.stringify(content, null, 2));
});
