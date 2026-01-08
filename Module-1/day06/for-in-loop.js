const product = {
  name: 'Indomilk',
  price: 7000,
  weight: '70gr',
  flavour: ['Coklat', 'Strawberry']
};

for (let key in product) {
  console.log(key);
  console.log(product[key]);
}
