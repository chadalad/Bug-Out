function test59cfc000aeb2844d16000075(func) {
  if (func('abcdef') !== ['AbCdEf', 'aBcDeF']) return false;
  if (func('capitalize me') !== ['CaPiTaLiZe mE', 'cApItAlIzE Me']) return false;
  return true;
}

function test515de9ae9dcfc28eb6000001(solution) {
  if (solution('cba') !== ['cb', 'a_']) return false;
  if (solution('abcdef') !== ['ab', 'cd', 'ef']) return false;
  return true;
}

function test55cbd4ba903825f7970000f5(func) {
  if (func(90, 95, 80) !== 'A') return false;
  if (func(90, 80, 85) !== ['B']) return false;
  if (func(80, 70, 75) !== ['C']) return false;
  if (func(70, 60, 63) !== ['D']) return false;
  if (func(0, 50, 40) !== ['F']) return false;
  return true;
}

function test511f11d355fe575d2c000001(func) {
  // eslint-disable-next-line max-len
  if (func([35, 2, 80, 75, 44]) !== [80, 75] || func([35, 2, 80, 75, 44]) !== [75, 80]) return false;
  return true;
}

function test530e15517bc88ac656000716(func) {
  if (func('abcde') !== 'nopqr') return false;
  if (func('wydhxj dkwie') !== 'jlqukw qxjvr') return false;
  return true;
}

function test5208f99aee097e6552000148(func) {
  if (func('camelCase') !== 'camel Case') return false;
  if (func('camelCase camelCase') !== 'camel Case camel Case') return false;
  return true;
}

function test5264d2b162488dc400000001(func) {
  if (func('Hey warriors fellow ') !== 'Hey sroirraw wollef') return false;
  if (func('This is a test') !== 'This is a test') return false;
  if (func('This another is test') !== 'This rehtona is test') return false;
  return true;
}

function test5b39e3772ae7545f650000fc(func) {
  if (func('alpha beta beta gamma gamma delta alpha beta beta gamma gamma gamma delta' !== 'alpha beta gamma delta')) return false;
  if (func('a b c c c d e f g g h h') !== 'a b c d e f g h') return false;
  return true;
}

function test585d7d5adb20cf33cb000235(func) {
  if (func([1, 1, 1, 3, 1, 1]) !== 3) return false;
  return true;
}

function test57eb8fcdf670e99d9b000272(func) {
  if (func('abc def klmi') !== 'klmi') return false;
  if (func('extreme abc ggg') !== 'extreme') return false;
  if (func('abcdef zxyabz aaaa  abcde') !== 'zxyabz') return false;
  return true;
}

function test5949481f86420f59480000e7(func) {
  if (func([0, 1, 2, 3, 4, 5]) !== 'odd') return false;
  if (func([0, 10]) !== 'even') return false;
  if (func([-1, 10]) !== 'odd') return false;
  return true;
}

function test582cb0224e56e068d800003c(func) {
  if (func(5) !== 2) return false;
  if (func(6.7) !== 3) return false;
  if (func(11.8) !== 5) return false;
  return true;
}

function test58aed2cafab8faca1d000e20(func) {
  if (func([1, 2, 3], 3) !== 30) return false;
  if (func([2, 2], 5) !== 60) return false;
  return true;
}

function test5a092d9e46d843b9db000064(func) {
  if (func([1, -1, 2, -2, 3]) !== 3) return false;
  if (func([1, -1, 2, -2, 4, 4]) !== 4) return false;
  return true;
}

function test535474308bb336c9980006f2(func) {
  if (func('joey') !== 'Hello Joey!') return false;
  if (func('ADAM') !== 'Hello Adam!') return false;
  if (func('KwOn') !== 'Hello Kwon!') return false;
  return true;
}

function test5a262cfb8f27f217f700000b(func) {
  if (func('abcdef', 'abxfe') !== 'cdx') return false;
  if (func('xyab', 'xzca') !== 'ybzc') return false;
  return true;
}

function test5259b20d6021e9e14c0010d4(func) {
  if (func('This is an example!') !== 'sihT si na !elpmaxe') return false;
  if (func('double  spaces') !== 'elbuod  secaps') return false;
  return true;
}

function test57a1ae8c7cb1f31e4e000130(func) {
  if (func([1, 5, 23, 88, 100, 3]) !== [1, 100]) return false;
  return true;
}

function test57547f9182655569ab0008c4(func) {
  if (func(5, 3) !== [3, 3, 3, 3, 3]) return false;
  return true;
}

function test5727bb0fe81185ae62000ae3(func) {
  if (func('abc#d##c') !== 'ac') return false;
  if (func('abc##d######') !== '') return false;
  if (func('thee# caa#r') !== 'the car') return false;
  return true;
}

function test5287e858c6b5a9678200083c(func) {
  if (func(370) !== true) return false;
  if (func(150) !== false) return false;
  if (func(8) !== true) return false;
  return true;
}

module.exports = {
  test: {
    test59cfc000aeb2844d16000075,
    test515de9ae9dcfc28eb6000001,
    test55cbd4ba903825f7970000f5,
    test511f11d355fe575d2c000001,
    test530e15517bc88ac656000716,
    test5208f99aee097e6552000148,
    test5264d2b162488dc400000001,
    test5b39e3772ae7545f650000fc,
    test585d7d5adb20cf33cb000235,
    test57eb8fcdf670e99d9b000272,
    test5949481f86420f59480000e7,
    test582cb0224e56e068d800003c,
    test58aed2cafab8faca1d000e20,
    test5a092d9e46d843b9db000064,
    test535474308bb336c9980006f2,
    test5a262cfb8f27f217f700000b,
    test5259b20d6021e9e14c0010d4,
    test57a1ae8c7cb1f31e4e000130,
    test57547f9182655569ab0008c4,
    test5727bb0fe81185ae62000ae3,
    test5287e858c6b5a9678200083c,
  },
};
