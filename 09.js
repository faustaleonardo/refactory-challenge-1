const data = require('./data.json');

const getMonth = date => {
  return new Date(date).getMonth() + 1;
};

const findPurchasesInFeb = data => {
  return data.filter(el => getMonth(el.created_at) === 2);
};

const sumPurchasesMadeByAri = data => {
  let grandTotal = 0;
  data.forEach(el => {
    if (el.customer.name === 'Ari') {
      el.items.forEach(item => {
        grandTotal += item.price;
      });
    }
  });

  return grandTotal;
};

const selectCustomers = () => {
  const customers = {};
  const customerNames = [];

  data.forEach(el => {
    if (!customers[el.customer.name]) {
      customers[el.customer.name] = 0;
    }
    el.items.forEach(item => {
      customers[el.customer.name] += item.price;
    });
  });

  for (let name in customers) {
    if (customers[name] < 300000) customerNames.push(name);
  }

  return customerNames;
};

console.log(findPurchasesInFeb(data));
console.log(sumPurchasesMadeByAri(data));
console.log(selectCustomers());
