class Product {
  name;
  price;

  constructor(_name, _price) {
    this.name = _name;
    this.price = _price;
  }

  get showData() {
    console.log(`${this.name} = Rp.${this.price?.toLocaleString('id-ID')}`);
  }
}

class Book extends Product {
  author;
  publisher;

  constructor(_name, _price, _author, _publisher) {
    super(_name, _price);
    this.author = _author;
    this.publisher = _publisher;
  }

  get showData() {
    console.log(
      `${this.name} (${this.publisher}) = Rp.${this.price?.toLocaleString(
        'id-ID'
      )}`
    );
  }
}

const book1 = new Book('Javascript', 150000, 'Defryan', 'Purwadhika');
book1.showData;
