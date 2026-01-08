class Product{
    name;
    price;

    constructor(_name,_price){
        this.name = _name
        this.price = _price
    }
}

const products = [
    new Product('Indomie Goreng 110gr',2000),
    new Product('Indomie Ayam Bawang 90gr',1950),
    new Product('Gulaku Murni 1gr',18000),
];

class Transaction {
    total = 0;
    carts = [];
    
    addToCart(product) {
        this.carts?.push(product);
    }

    showTotal(){
        return this.carts.reduce(
            (previousValue, currentValue) =>
            previousValue + currentValue?.price * currentValue?.quantity,
            0
        );
    }

    checkout(){
        const totalTransaction = this.showTotal();

        let printOut = '';

        for(let item of this.carts){
            printOut += `${item?.name}: Rp.${item?.price?.toLocaleString(
                'id-ID'
            )} x ${item?.quantity} = Rp.${(item?.price * item?.quantity).toLocaleString('id-ID')} \n`;
            
        }
        
        printOut += `Total = Rp.${totalTransaction.toLocaleString('id-ID')}`;
        console.log(printOut);
    }
}

const user1 = new Transaction();
user1.addToCart({...products[0], quantity: 10});
user1.addToCart({...products[1], quantity: 1});

user1.checkout();