/* eslint-disable no-new-func */
const findArgs = (code) => {
  let openingIdx = 0;
  let closingIdx = 1;
  for (let i = 0; i < code.length; i += 1) {
    if (code[i] === '(') {
      openingIdx = i;
      for (let j = i; j < code.length - i; j += 1) {
        if (code[j] === ')') {
          closingIdx = j;
          break;
        }
      }
      break;
    }
  }
  return code.slice(openingIdx + 1, closingIdx).split(',');
};

const findBody = (code) => {
  let start = 0;
  let end = 1;
  for (let i = 0; i < code.length; i += 1) {
    if (code[i] === '{') {
      start = i;
      break;
    }
  }
  for (let j = code.length - 1; j > 1; j -= 1) {
    if (code[j] === '}') {
      end = j;
    }
    break;
  }
  return code.slice(start + 1, end - 1);
};

const buildFunction = (code) => {
  const args = findArgs(code);
  const body = findBody(code);

  return new Function(args, body);
};

module.exports = {
  buildFunction,
};
