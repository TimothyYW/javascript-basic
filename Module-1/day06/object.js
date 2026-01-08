let student = {
  name: 'Defryan',
  program: 'JCWD',
  address: 'Bogor',
};

let user = new Object();
user.name = 'Immanuel';
user.password = 'abc12345';
user.email = 'immanuel@gmail.com';

/* Accessing Property Object */
const product = {
  name: 'Indomie Goreng',
  price: 2500,
  stock: 1000,
};
console.log(product.name);
console.log(product['price']);

/* Update Property Object */
product.name = 'Indomie Ayam Bawang';
product['price'] = 2250;
console.log(product);

/* Delete Property Object */
delete product.name;
delete product['price'];
console.log(product);

const arrProducts = [
  {
    name: 'Indomie Goreng',
    price: 2500,
    stock: 1000,
  },
  {
    name: 'Indomie Kuah',
    price: 2000,
    stock: 5000,
  },
];

/* Optional Chaining */
const admin = {};

console.log(admin.fullname);
console.log(admin?.fullname?.firstname);

/* Destructuing Assignment : Mengeluarkan property object dan memasukannya kedalam tiap-tiap variable */
{
  const product = {
    name: 'Kaos Polis',
    price: 100000,
    size: 'XL',
  };

  const { price, size, name } = product;

  console.log(name);
  console.log(price);
  console.log(size);
}

function Profile({ fullname, address, email, phoneNumber, hobby }) {}

Profile({
  fullname: 'Defryan',
  address: 'Bogor',
  email: 'def@gmail.com',
  phoneNumber: '081',
  hobby: 'Futsal',
});

/* Spread Operator */
{
  const objOne = {
    name: 'Defryan',
  };

  const objTwo = {
    email: 'defryan@gmail.com',
  };

  const objFinal = { ...objOne, ...objTwo };

  /* Copy by Reference */
  const productMarket = {
    name: 'Sawi',
    price: 1500,
    stock: 1000,
  };

  const newProductMarket = productMarket;
  newProductMarket.name = 'Kangkung';
  console.log(productMarket);
  console.log(newProductMarket);

  /* Copy by Value */
  {
    const productMarket = {
      name: 'Sawi',
      price: 1500,
      stock: 1000,
    };

    const newProductMarket = { ...productMarket };
    newProductMarket.name = 'Kangkung';
    console.log(productMarket);
    console.log(newProductMarket);
  }
}
