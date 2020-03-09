const fs = require('fs');
const { promisify } = require('util');
let file;

const convertToJsonObj = file => {
  const arr = file.split('\n');
  const jsonObj = [];
  const headers = arr[0].toLowerCase().split(',');

  for (let i = 1; i < arr.length; i++) {
    const data = arr[i].split(',');
    const obj = {};
    for (let j = 0; j < data.length; j++) {
      obj[headers[j].trim()] = data[j].trim();
    }
    jsonObj.push(obj);
  }
  return JSON.stringify(jsonObj);
};

const convertToRupiah = number => {
  const str = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(number);
  return str
    .replace(/IDR/gi, 'Rp')
    .slice(0, -3)
    .replace(/,/gi, '.');
};

const sortAscByKey = (array, key) => {
  return array.sort((a, b) => {
    const x = a[key];
    const y = b[key];
    return x - y < y - x ? -1 : x - y > y - x ? 1 : 0;
  });
};

const readAndConvert = async () => {
  try {
    file = await promisify(fs.readFile)('./file.csv', 'utf-8');
    return convertToJsonObj(file);
  } catch (err) {
    console.log(err);
  }
};

readAndConvert()
  .then(result => {
    let objData = sortAscByKey(JSON.parse(result), 'price');
    objData.forEach(data => {
      data.price = convertToRupiah(data.price);
    });
    const jsonData = JSON.stringify(objData);
    console.log(jsonData);
  })
  .catch(err => console.log(err));
