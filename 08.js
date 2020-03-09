const generateRandomString = length => {
  let str = '';
  const chars =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
};

function slugify(string, symbol) {
  const a =
    'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
  const b =
    'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
  const p = new RegExp(a.split('').join('|'), 'g');

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(p, c => b.charAt(a.indexOf(c)))
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

class Str {
  lower(str) {
    return str.toLowerCase();
  }

  upper(str) {
    return str.toUpperCase();
  }

  capitalize(str) {
    return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  }

  reverse(str) {
    return str
      .split('')
      .reverse()
      .join('');
  }

  contains(str, words) {
    if (words instanceof Array) {
      let result = false;
      for (let word of words) {
        if (str.includes(word)) {
          result = true;
          break;
        }
      }

      return result;
    }

    return str.includes(words);
  }

  random(length = 16) {
    return generateRandomString(length);
  }

  slug(str, symbol = '_') {
    return slugify(str).replace(/-/gi, symbol);
  }

  count(str) {
    return str.split('').length;
  }

  countWords(str) {
    return str.split(' ').length;
  }

  trim(text, length = 100, dotText = '...') {
    let result = text
      .split('')
      .slice(0, length)
      .join('');

    return length < 100 || text.split('').length > 100
      ? (result += dotText)
      : result;
  }

  trimWords(text, length = 30, dotText = '...') {
    let result = text
      .split(' ')
      .slice(0, length)
      .join(' ');

    return length < 30 || text.split(' ').length > 30
      ? (result += dotText)
      : result;
  }
}

const str = new Str();
console.log(str.lower('MAKAN'));
console.log(str.upper('malam'));
console.log(str.capitalize('saya ingin makan'));
console.log(str.reverse('kasur'));
console.log(str.contains('Saya ingin makan sate', 'makan'));
console.log(str.contains('Saya ingin makan sate', 'rujak'));
console.log(str.contains('Saya ingin makan sate', ['sate', 'rujak']));
console.log(str.random());
console.log(str.random(6));
console.log(str.random(32));

const title =
  'JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?';
console.log(str.slug(title));
console.log(str.slug(title, '_'));

console.log(str.count('lorem ipsum'));
console.log(str.countWords('lorem ipsum'));

const text1 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

console.log(str.trim('Less than 100 characters'));

console.log(str.trim(text1));

console.log(str.trim(text1, 20));

console.log(str.trim(text1, 20, '·····'));

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

console.log(str.trimWords('Less than 30 words'));

console.log(str.trimWords(text));

console.log(str.trimWords(text, 3));

console.log(str.trimWords(text, 3, '·····'));
