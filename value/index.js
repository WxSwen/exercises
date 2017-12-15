/**
 * 计算嵌套函数返回的最终值
 * @param {*} args
 * @return {*}
 */
function value(args) {
  return typeof args === "function" ? arguments.callee(args.call(this)) : args;
}

module.exports = value;
