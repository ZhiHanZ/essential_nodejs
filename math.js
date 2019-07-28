exports.add = function() {
  let sum = 0;
  let i = 0;
  args = arguments,
  l = args.length;
  while (i < l) {
    sum += args[i++];
  }
  return sum;
};
