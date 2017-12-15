/**
 * 数组扁平化
 * @param {Array} args
 * @return {Array} newArray
 */
function flattern(args) {
  if (!Array.isArray(args)) {
    throw new Error("error arguments");
  }
  return args.reduce((prev, curr) => {
    if (Array.isArray(curr)) {
      return prev.concat(arguments.callee(curr));
    } else {
      return prev.concat(curr);
    }
  }, []);
}

module.exports = flattern;
