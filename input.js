function nameFilter(name) {
  if (name === undefined) {
    name = "unkown";
  }
  if (name.startsWith(" ") || name.endsWith(" ")) {
    name = name.trim();
  }
  if (name === "Hell") {
    throw Error("This Name Is Not Allowed");
  }
  return name;
}
module.exports = nameFilter;
