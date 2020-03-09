const sentences =
  'Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambu La... la... la... Aku sayang sekali Doraemon La... la... la... Aku sayang sekali';

const arr = sentences.split(' ');
let aku = 0;
let ingin = 0;
let dapat = 0;

arr.forEach(el => {
  switch (el.toLowerCase()) {
    case 'aku':
      aku++;
      break;
    case 'ingin':
      ingin++;
      break;
    case 'dapat':
      dapat++;
      break;
    default:
      break;
  }
});

console.log('aku: ', aku);
console.log('ingin: ', ingin);
console.log('dapat: ', dapat);
