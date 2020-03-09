const censoredWords = [
  /dolor/,
  /elit/,
  /quis/,
  /nisi/,
  /fugiat/,
  /proident/,
  /laborum/
];

let sentence =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const generateAsterisk = str => {
  let result = '';
  let arrString = str.split('');
  for (let i = 0; i < arrString.length; i++) {
    result += '*';
  }
  return result;
};

for (let wordPattern of censoredWords) {
  const word = wordPattern.toString().replace(/\//gi, '');
  sentence = sentence.replace(wordPattern, generateAsterisk(word));
}

console.log(sentence);
