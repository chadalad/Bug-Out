const axios = require('axios');
const { models } = require('./src/server/db/models/index');

const data = [
  {
    id: '59cfc000aeb2844d16000075',
    name: 'Alternate capitalization',
    slug: 'alternate-capitalization',
    completedLanguages: [Array],
    completedAt: '2020-03-11T16:54:52.076Z',
  },
  {
    id: '515de9ae9dcfc28eb6000001',
    name: 'Split Strings',
    slug: 'split-strings',
    completedLanguages: [Array],
    completedAt: '2020-02-29T15:24:10.101Z',
  },
  {
    id: '55cbd4ba903825f7970000f5',
    name: 'Grasshopper - Grade book',
    slug: 'grasshopper-grade-book',
    completedLanguages: [Array],
    completedAt: '2020-02-28T20:28:42.044Z',
  },
  {
    id: '511f11d355fe575d2c000001',
    name: 'Two Oldest Ages',
    slug: 'two-oldest-ages-1',
    completedLanguages: [Array],
    completedAt: '2020-02-28T16:32:35.794Z',
  },
  {
    id: '530e15517bc88ac656000716',
    name: 'Rot13',
    slug: 'rot13-1',
    completedLanguages: [Array],
    completedAt: '2020-02-17T20:30:23.694Z',
  },
  {
    id: '5208f99aee097e6552000148',
    name: 'Break camelCase',
    slug: 'break-camelcase',
    completedLanguages: [Array],
    completedAt: '2020-02-17T17:50:18.804Z',
  },
  {
    id: '5264d2b162488dc400000001',
    name: 'Stop gninnipS My sdroW!',
    slug: 'stop-gninnips-my-sdrow',
    completedLanguages: [Array],
    completedAt: '2020-02-17T17:38:49.532Z',
  },
  {
    id: '5b39e3772ae7545f650000fc',
    name: 'Remove duplicate words',
    slug: 'remove-duplicate-words',
    completedLanguages: [Array],
    completedAt: '2020-02-17T17:23:47.114Z',
  },
  {
    id: '585d7d5adb20cf33cb000235',
    name: 'Find the unique number',
    slug: 'find-the-unique-number-1',
    completedLanguages: [Array],
    completedAt: '2020-02-10T02:41:29.482Z',
  },
  {
    id: '57eb8fcdf670e99d9b000272',
    name: 'Highest Scoring Word',
    slug: 'highest-scoring-word',
    completedLanguages: [Array],
    completedAt: '2020-02-09T16:22:18.846Z',
  },
  {
    id: '5949481f86420f59480000e7',
    name: 'Odd or Even?',
    slug: 'odd-or-even',
    completedLanguages: [Array],
    completedAt: '2020-02-08T16:33:07.876Z',
  },
  {
    id: '582cb0224e56e068d800003c',
    name: 'Keep Hydrated!',
    slug: 'keep-hydrated-1',
    completedLanguages: [Array],
    completedAt: '2020-02-08T16:28:54.724Z',
  },
  {
    id: '58aed2cafab8faca1d000e20',
    name: 'Nth power rules them all!',
    slug: 'nth-power-rules-them-all',
    completedLanguages: [Array],
    completedAt: '2020-07-20T14:27:09.844Z',
  },
  {
    id: '5a092d9e46d843b9db000064',
    name: 'Array element parity',
    slug: 'array-element-parity',
    completedLanguages: [Array],
    completedAt: '2020-07-20T14:20:54.026Z',
  },
  {
    id: '535474308bb336c9980006f2',
    name: 'Greet Me',
    slug: 'greet-me',
    completedLanguages: [Array],
    completedAt: '2020-05-27T19:29:33.561Z',
  },
  {
    id: '5a262cfb8f27f217f700000b',
    name: 'Unique string characters',
    slug: 'unique-string-characters',
    completedLanguages: [Array],
    completedAt: '2020-05-18T20:37:50.200Z',
  },
  {
    id: '5259b20d6021e9e14c0010d4',
    name: 'Reverse words',
    slug: 'reverse-words',
    completedLanguages: [Array],
    completedAt: '2020-05-04T20:42:12.236Z',
  },
  {
    id: '57a1ae8c7cb1f31e4e000130',
    name: 'Find min and max',
    slug: 'find-min-and-max',
    completedLanguages: [Array],
    completedAt: '2020-04-21T21:18:22.309Z',
  },
  {
    id: '57547f9182655569ab0008c4',
    name: 'Recursive Replication',
    slug: 'recursive-replication',
    completedLanguages: [Array],
    completedAt: '2020-04-08T18:19:20.500Z',
  },
  {
    id: '5727bb0fe81185ae62000ae3',
    name: 'Backspaces in string',
    slug: 'backspaces-in-string',
    completedLanguages: [Array],
    completedAt: '2020-03-11T14:32:21.067Z',
  },
  {
    id: '5287e858c6b5a9678200083c',
    name: 'Does my number look big in this?',
    slug: 'does-my-number-look-big-in-this',
    completedLanguages: [Array],
    completedAt: '2020-03-10T14:32:21.961Z',
  },
  // {
  //   id: '5648b12ce68d9daa6b000099',
  //   name: 'Number of People in the Bus',
  //   slug: 'number-of-people-in-the-bus',
  //   completedLanguages: [Array],
  //   completedAt: '2020-03-10T14:15:03.021Z'
  // },
  // {
  //   id: '54da539698b8a2ad76000228',
  //   name: 'Take a Ten Minute Walk',
  //   slug: 'take-a-ten-minute-walk',
  //   completedLanguages: [Array],
  //   completedAt: '2020-03-09T16:49:43.181Z'
  // },
  // {
  //   id: '55b42574ff091733d900002f',
  //   name: 'Friend or Foe?',
  //   slug: 'friend-or-foe',
  //   completedLanguages: [Array],
  //   completedAt: '2020-03-09T16:38:45.989Z'
  // },
  // {
  //   id: '523a86aa4230ebb5420001e1',
  //   name: 'Where my anagrams at?',
  //   slug: 'where-my-anagrams-at',
  //   completedLanguages: [Array],
  //   completedAt: '2020-03-07T05:04:27.240Z'
  // },
  // {
  //   id: '541c8630095125aba6000c00',
  //   name: 'Sum of Digits / Digital Root',
  //   slug: 'sum-of-digits-slash-digital-root',
  //   completedLanguages: [Array],
  //   completedAt: '2020-03-07T04:45:40.174Z'
  // },
  // {
  //   id: '55bf01e5a717a0d57e0000ec',
  //   name: 'Persistent Bugger.',
  //   slug: 'persistent-bugger',
  //   completedLanguages: [Array],
  //   completedAt: '2020-03-07T04:34:44.656Z'
  // },
  // {
  //   id: '59f7fc109f0e86d705000043',
  //   name: 'By 3, or not by 3?  That is the question . . .',
  //   slug: 'by-3-or-not-by-3-that-is-the-question',
  //   completedLanguages: [Array],
  //   completedAt: '2020-03-07T04:12:24.851Z'
  // },
  // {
  //   id: '552c028c030765286c00007d',
  //   name: 'IQ Test',
  //   slug: 'iq-test',
  //   completedLanguages: [Array],
  //   completedAt: '2020-03-05T14:46:39.624Z'
  // },
  // {
  //   id: '55c45be3b2079eccff00010f',
  //   name: 'Your order,  please',
  //   slug: 'your-order-please',
  //   completedLanguages: [Array],
  //   completedAt: '2020-03-05T14:24:08.555Z'
  // },
  // {
  //   id: '54e6533c92449cc251001667',
  //   name: 'Unique In Order',
  //   slug: 'unique-in-order',
  //   completedLanguages: [Array],
  //   completedAt: '2020-03-05T14:08:34.138Z'
  // },
  // {
  //   id: '551dc350bf4e526099000ae5',
  //   name: 'Dubstep',
  //   slug: 'dubstep',
  //   completedLanguages: [Array],
  //   completedAt: '2020-03-05T04:11:17.581Z'
  // },
  // {
  //   id: '526571aae218b8ee490006f4',
  //   name: 'Bit Counting',
  //   slug: 'bit-counting',
  //   completedLanguages: [Array],
  //   completedAt: '2020-03-04T22:08:30.123Z'
  // },
  // {
  //   id: '545cedaa9943f7fe7b000048',
  //   name: 'Detect Pangram',
  //   slug: 'detect-pangram',
  //   completedLanguages: [Array],
  //   completedAt: '2020-03-04T21:55:38.451Z'
  // },
  // {
  //   id: '54b42f9314d9229fd6000d9c',
  //   name: 'Duplicate Encoder',
  //   slug: 'duplicate-encoder',
  //   completedLanguages: [Array],
  //   completedAt: '2020-03-04T15:03:16.934Z'
  // },
  // {
  //   id: '5526fc09a1bbd946250002dc',
  //   name: 'Find The Parity Outlier',
  //   slug: 'find-the-parity-outlier',
  //   completedLanguages: [Array],
  //   completedAt: '2020-03-04T14:53:24.165Z'
  // },
  // {
  //   id: '54bf1c2cd5b56cc47f0007a1',
  //   name: 'Counting Duplicates',
  //   slug: 'counting-duplicates',
  //   completedLanguages: [Array],
  //   completedAt: '2020-03-04T14:44:12.499Z'
  // },
  // {
  //   id: '515de9ae9dcfc28eb6000001',
  //   name: 'Split Strings',
  //   slug: 'split-strings',
  //   completedLanguages: [Array],
  //   completedAt: '2020-03-03T21:52:17.979Z'
  // },
  // {
  //   id: '5262119038c0985a5b00029f',
  //   name: 'Is a number prime?',
  //   slug: 'is-a-number-prime',
  //   completedLanguages: [Array],
  //   completedAt: '2020-03-03T21:32:39.259Z'
  // },
  // {
  //   id: '520b9d2ad5c005041100000f',
  //   name: 'Simple Pig Latin',
  //   slug: 'simple-pig-latin',
  //   completedLanguages: [Array],
  //   completedAt: '2020-03-03T15:33:53.793Z'
  // },
  // {
  //   id: '514b92a657cdc65150000006',
  //   name: 'Multiples of 3 or 5',
  //   slug: 'multiples-of-3-or-5',
  //   completedLanguages: [Array],
  //   completedAt: '2020-03-02T15:43:41.876Z'
  // },
  // {
  //   id: '54da5a58ea159efa38000836',
  //   name: 'Find the odd int',
  //   slug: 'find-the-odd-int',
  //   completedLanguages: [Array],
  //   completedAt: '2020-03-02T15:38:10.950Z'
  // },
  // {
  //   id: '56606694ec01347ce800001b',
  //   name: 'Is this a triangle?',
  //   slug: 'is-this-a-triangle',
  //   completedLanguages: [Array],
  //   completedAt: '2020-03-02T15:28:14.333Z'
  // },
  // {
  //   id: '5656b6906de340bd1b0000ac',
  //   name: 'Two to One',
  //   slug: 'two-to-one',
  //   completedLanguages: [Array],
  //   completedAt: '2020-03-02T15:20:11.533Z'
  // },
  // {
  //   id: '59f7a0a77eb74bf96b00006a',
  //   name: "What's my golf score?",
  //   slug: 'whats-my-golf-score',
  //   completedLanguages: [Array],
  //   completedAt: '2020-02-29T17:03:17.854Z'
  // },
  // {
  //   id: '52a723508a4d96c6c90005ba',
  //   name: '99 bottles of beer',
  //   slug: '99-bottles-of-beer-1',
  //   completedLanguages: [Array],
  //   completedAt: '2020-02-29T16:51:20.274Z'
  // },
  // {
  //   id: '54c27a33fb7da0db0100040e',
  //   name: "You're a square!",
  //   slug: 'youre-a-square',
  //   completedLanguages: [Array],
  //   completedAt: '2020-02-28T21:55:03.626Z'
  // },
  // {
  //   id: '558fc85d8fd1938afb000014',
  //   name: 'Sum of two lowest positive integers',
  //   slug: 'sum-of-two-lowest-positive-integers',
  //   completedLanguages: [Array],
  //   completedAt: '2020-02-28T21:47:17.877Z'
  // },
  // {
  //   id: '563b662a59afc2b5120000c6',
  //   name: 'Growth of a Population',
  //   slug: 'growth-of-a-population',
  //   completedLanguages: [Array],
  //   completedAt: '2020-02-28T21:22:34.576Z'
  // },
  // {
  //   id: '5a15a4db06d5b6d33c000018',
  //   name: 'Sum of a nested list',
  //   slug: 'sum-of-a-nested-list',
  //   completedLanguages: [Array],
  //   completedAt: '2020-02-27T00:35:03.205Z'
  // },
  // {
  //   id: '5694cb0ec554589633000036',
  //   name: 'Recursion #1 - Factorial',
  //   slug: 'recursion-number-1-factorial',
  //   completedLanguages: [Array],
  //   completedAt: '2020-02-26T00:42:24.570Z'
  // },
  // {
  //   id: '546f922b54af40e1e90001da',
  //   name: 'Replace With Alphabet Position',
  //   slug: 'replace-with-alphabet-position',
  //   completedLanguages: [Array],
  //   completedAt: '2020-02-21T00:16:33.406Z'
  // },
  // {
  //   id: '52597aa56021e91c93000cb0',
  //   name: 'Moving Zeros To The End',
  //   slug: 'moving-zeros-to-the-end',
  //   completedLanguages: [Array],
  //   completedAt: '2020-02-20T16:17:55.932Z'
  // },
  // {
  //   id: '5949481f86420f59480000e7',
  //   name: 'Odd or Even?',
  //   slug: 'odd-or-even',
  //   completedLanguages: [Array],
  //   completedAt: '2020-02-20T00:18:50.137Z'
  // },
  // {
  //   id: '54ba84be607a92aa900000f1',
  //   name: 'Isograms',
  //   slug: 'isograms',
  //   completedLanguages: [Array],
  //   completedAt: '2020-02-18T14:42:48.549Z'
  // },
  // {
  //   id: '5264d2b162488dc400000001',
  //   name: 'Stop gninnipS My sdroW!',
  //   slug: 'stop-gninnips-my-sdrow',
  //   completedLanguages: [Array],
  //   completedAt: '2020-02-17T17:40:03.594Z'
  // },
  // {
  //   id: '5b39e3772ae7545f650000fc',
  //   name: 'Remove duplicate words',
  //   slug: 'remove-duplicate-words',
  //   completedLanguages: [Array],
  //   completedAt: '2020-02-17T17:30:48.424Z'
  // },
  // {
  //   id: '525f50e3b73515a6db000b83',
  //   name: 'Create Phone Number',
  //   slug: 'create-phone-number',
  //   completedLanguages: [Array],
  //   completedAt: '2020-02-17T17:25:29.028Z'
  // },
  // {
  //   id: '53dbd5315a3c69eed20002dd',
  //   name: 'List Filtering',
  //   slug: 'list-filtering',
  //   completedLanguages: [Array],
  //   completedAt: '2020-02-14T22:10:52.524Z'
  // },
  // {
  //   id: '56f69d9f9400f508fb000ba7',
  //   name: 'Count the Monkeys!',
  //   slug: 'count-the-monkeys',
  //   completedLanguages: [Array],
  //   completedAt: '2020-02-14T22:07:25.643Z'
  // },
  // {
  //   id: '5266876b8f4bf2da9b000362',
  //   name: 'Who likes it?',
  //   slug: 'who-likes-it',
  //   completedLanguages: [Array],
  //   completedAt: '2020-02-14T17:39:54.539Z'
  // },
  // {
  //   id: '55f2b110f61eb01779000053',
  //   name: 'Beginner Series #3 Sum of Numbers',
  //   slug: 'beginner-series-number-3-sum-of-numbers',
  //   completedLanguages: [Array],
  //   completedAt: '2020-02-13T00:58:37.366Z'
  // },
  // {
  //   id: '5390bac347d09b7da40006f6',
  //   name: 'Jaden Casing Strings',
  //   slug: 'jaden-casing-strings',
  //   completedLanguages: [Array],
  //   completedAt: '2020-02-12T01:49:00.416Z'
  // },
  // {
  //   id: '52fba66badcd10859f00097e',
  //   name: 'Disemvowel Trolls',
  //   slug: 'disemvowel-trolls',
  //   completedLanguages: [Array],
  //   completedAt: '2020-02-05T15:37:43.001Z'
  // },
  // {
  //   id: '554e4a2f232cdd87d9000038',
  //   name: 'Complementary DNA',
  //   slug: 'complementary-dna',
  //   completedLanguages: [Array],
  //   completedAt: '2020-02-04T21:06:00.152Z'
  // },
  // {
  //   id: '55908aad6620c066bc00002a',
  //   name: 'Exes and Ohs',
  //   slug: 'exes-and-ohs',
  //   completedLanguages: [Array],
  //   completedAt: '2020-02-04T16:33:17.168Z'
  // },
  // {
  //   id: '544675c6f971f7399a000e79',
  //   name: 'Convert a String to a Number!',
  //   slug: 'convert-a-string-to-a-number',
  //   completedLanguages: [Array],
  //   completedAt: '2020-02-04T16:02:30.146Z'
  // },
  // {
  //   id: '546e2562b03326a88e000020',
  //   name: 'Square Every Digit',
  //   slug: 'square-every-digit',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-30T03:29:25.257Z'
  // },
  // {
  //   id: '5467e4d82edf8bbf40000155',
  //   name: 'Descending Order',
  //   slug: 'descending-order',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-29T20:35:16.483Z'
  // },
  // {
  //   id: '57cebe1dc6fdc20c57000ac9',
  //   name: 'Shortest Word',
  //   slug: 'shortest-word',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-29T16:42:13.092Z'
  // },
  // {
  //   id: '5899dc03bc95b1bf1b0000ad',
  //   name: 'Invert values',
  //   slug: 'invert-values',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-29T16:18:56.542Z'
  // },
  // {
  //   id: '554b4ac871d6813a03000035',
  //   name: 'Highest and Lowest',
  //   slug: 'highest-and-lowest',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-28T19:53:11.774Z'
  // },
  // {
  //   id: '57eadb7ecd143f4c9c0000a3',
  //   name: 'Abbreviate a Two Word Name',
  //   slug: 'abbreviate-a-two-word-name',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-28T16:09:05.354Z'
  // },
  // {
  //   id: '56747fd5cb988479af000028',
  //   name: 'Get the Middle Character',
  //   slug: 'get-the-middle-character',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-27T14:01:07.288Z'
  // },
  // {
  //   id: '515e271a311df0350d00000f',
  //   name: 'Square(n) Sum',
  //   slug: 'square-n-sum',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-27T03:28:29.245Z'
  // },
  // {
  //   id: '57f781872e3d8ca2a000007e',
  //   name: 'Beginner - Lost Without a Map',
  //   slug: 'beginner-lost-without-a-map',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-26T23:41:14.989Z'
  // },
  // {
  //   id: '5667e8f4e3f572a8f2000039',
  //   name: 'Mumbling',
  //   slug: 'mumbling',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-26T23:37:24.747Z'
  // },
  // {
  //   id: '576bb71bbbcf0951d5000044',
  //   name: 'Count of positives / sum of negatives',
  //   slug: 'count-of-positives-slash-sum-of-negatives',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-26T20:04:28.858Z'
  // },
  // {
  //   id: '576b93db1129fcf2200001e6',
  //   name: 'Sum without highest and lowest number',
  //   slug: 'sum-without-highest-and-lowest-number',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-26T19:50:13.012Z'
  // },
  // {
  //   id: '582cb0224e56e068d800003c',
  //   name: 'Keep Hydrated!',
  //   slug: 'keep-hydrated-1',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-25T17:17:32.961Z'
  // },
  // {
  //   id: '5168bb5dfe9a00b126000018',
  //   name: 'Reversed Strings',
  //   slug: 'reversed-strings',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-23T19:59:08.302Z'
  // },
  // {
  //   id: '54ff3102c1bad923760001f3',
  //   name: 'Vowel Count',
  //   slug: 'vowel-count',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-21T23:13:28.574Z'
  // },
  // {
  //   id: '5583090cbe83f4fd8c000051',
  //   name: 'Convert number to reversed array of digits',
  //   slug: 'convert-number-to-reversed-array-of-digits',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-21T23:06:55.822Z'
  // },
  // {
  //   id: '5545f109004975ea66000086',
  //   name: 'Is n divisible by x and y?',
  //   slug: 'is-n-divisible-by-x-and-y',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-21T21:59:54.187Z'
  // },
  // {
  //   id: '56676e8fabd2d1ff3000000c',
  //   name: 'A Needle in the Haystack',
  //   slug: 'a-needle-in-the-haystack',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-21T21:56:04.303Z'
  // },
  // {
  //   id: '5265326f5fda8eb1160004c8',
  //   name: 'Convert a Number to a String!',
  //   slug: 'convert-a-number-to-a-string',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-21T15:44:30.475Z'
  // },
  // {
  //   id: '5a3fe3dde1ce0e8ed6000097',
  //   name: 'Century From Year',
  //   slug: 'century-from-year',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-21T15:19:20.920Z'
  // },
  // {
  //   id: '57356c55867b9b7a60000bd7',
  //   name: 'Basic Mathematical Operations',
  //   slug: 'basic-mathematical-operations',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-21T14:52:14.229Z'
  // },
  // {
  //   id: '53369039d7ab3ac506000467',
  //   name: "Convert boolean values to strings 'Yes' or 'No'.",
  //   slug: 'convert-boolean-values-to-strings-yes-or-no',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-21T14:46:45.359Z'
  // },
  // {
  //   id: '54edbc7200b811e956000556',
  //   name: 'Counting sheep...',
  //   slug: 'counting-sheep-dot-dot-dot',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-21T04:19:32.883Z'
  // },
  // {
  //   id: '55d24f55d7dd296eb9000030',
  //   name: 'Grasshopper - Summation',
  //   slug: 'grasshopper-summation',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-21T04:05:00.238Z'
  // },
  // {
  //   id: '55a2d7ebe362935a210000b2',
  //   name: 'Find the smallest integer in the array',
  //   slug: 'find-the-smallest-integer-in-the-array',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-21T03:56:59.161Z'
  // },
  // {
  //   id: '57eae20f5500ad98e50002c5',
  //   name: 'Remove String Spaces',
  //   slug: 'remove-string-spaces',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-21T03:45:27.510Z'
  // },
  // {
  //   id: '57a0e5c372292dd76d000d7e',
  //   name: 'String repeat',
  //   slug: 'string-repeat',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-21T03:33:06.819Z'
  // },
  // {
  //   id: '55685cd7ad70877c23000102',
  //   name: 'Return Negative',
  //   slug: 'return-negative',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-21T03:27:11.887Z'
  // },
  // {
  //   id: '56bc28ad5bdaeb48760009b0',
  //   name: 'Remove First and Last Character',
  //   slug: 'remove-first-and-last-character',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-21T03:22:17.917Z'
  // },
  // {
  //   id: '56dec885c54a926dcd001095',
  //   name: 'Opposite number',
  //   slug: 'opposite-number',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-21T01:47:28.750Z'
  // },
  // {
  //   id: '5715eaedb436cf5606000381',
  //   name: 'Sum of positive',
  //   slug: 'sum-of-positive',
  //   completedLanguages: [Array],
  //   completedAt: '2020-01-21T01:32:54.232Z'
  // }
];

// axios.get('https://www.codewars.com/api/v1/users/nickcarr51/code-challenges/completed?page=0/?access_key=QsVQKDG8_jqTJVwrWFWo')
// .then(({data})=> console.log(data))

// eslint-disable-next-line array-callback-return
data.map((prompt) => {
  axios.get(`https://www.codewars.com/api/v1/code-challenges/${prompt.slug}/?access_key=QsVQKDG8_jqTJVwrWFWo`)
  // eslint-disable-next-line no-shadow
    .then(({ data }) => {
      let difficulty = null;
      data.rank.id = Math.abs(data.rank.id);

      if (data.rank.id > 6) {
        difficulty = 'easy';
      } else if (data.rank.id > 5 && data.rank.id < 7) {
        difficulty = 'medium';
      } else {
        difficulty = 'hard';
      }

      try {
        const newPropmt = {
          id: data.id,
          name: data.name,
          prompt: data.description,
          difficulty,
          slug: data.slug,
        };
        return models.Prompt.create(newPropmt);
      } catch (e) {
        console.log(e);
      }
      return null;
    });
  console.log('Prompts Seeded');
});
