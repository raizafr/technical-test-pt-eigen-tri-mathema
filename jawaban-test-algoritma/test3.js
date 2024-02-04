function KataSama(input, query) {
  let output = [];
  query.forEach((kata) => {
    output.push(input.filter((item) => item === kata).length);
  });
  return output;
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

console.log(KataSama(INPUT, QUERY));
