/* PROMISE */

const products = ['Indomie', 'Mie Sedap', 'Sarimi'];

function deleteProduct() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (products.length > 0) {
        products.pop();
        resolve('Delete product successfull');
      } else {
        reject('Product already empty');
      }
    }, 1000);
  });
}

function getProduct() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (products.length > 0) {
        resolve(products);
      } else {
        reject('Product already empty');
      }
    }, 3000);
  });
}

deleteProduct()
  .then((response) => {
    return getProduct();
  })
  .then((response) => {
    console.log('.then getProduct');
    console.log(response);
  })
  .catch((error) => {
    console.log('.catch');
    console.log(error);
  })
  .finally(() => {
    console.log('.finally');
  });

// Challenge. Riset fetch(), lakukan call api menggunakan fetch ke url: https://jsonplaceholder.typicode.com/posts

function getDataPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      return response.json(); // Untuk mendapatkan data yg dikirim dari api, juga mengkonversi json format menjadi object JS
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
    .catch((error) => {
      console.log(error);
    });
}

// getDataPosts();

/* ASYNC AWAIT */
async function getDataPostV1() {
  try {
    const response1 = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response2 = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await response1.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

getDataPostV1();
