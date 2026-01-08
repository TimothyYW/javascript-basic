function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

class ProductData{
    name;
    price;

    constructor(_name,_price){
        this.name = _name;
        this.price = _price;
    }
};

class TransactionData {
    total;
    products;
    
    constructor(_total,_product){
        this.total = 0;
        this.products = [];
    }

    addToCart(product,quantity){
        const subtotal = product.price * quantity;
        this.products.push({product, quantity, subtotal});
        console.log(`${quantity} X ${product.name} added to the cart. Subtotal: $${formatRupiah(subtotal)}`);
    }

    showTotal(){
        this.total = this.products.reduce((sum, item)=> sum + item.subtotal, 0)
        console.log(`Total sementara: ${formatRupiah(this.total)}`);
    }

    checkout(){
        this.showTotal();
        console.log("Transaksi selesai");
        console.table(this.products.map(item => ({
            Name: item.product.name,
            Price: formatRupiah(item.product.price),
            Jumlah: item.quantity,
            Subtotal: formatRupiah(item.subtotal)
        })));
        console.log(`Total pembayaran: ${formatRupiah(this.total)}`)

        return{
            items : this.products,
            total : this.total
        }
    }
}

// Buat beberapa produk
const apple = new ProductData("Apel", 5000);
const milk = new ProductData("Susu", 12000);
const bread = new ProductData("Roti", 8000);

// Buat transaksi baru
const transaksi = new TransactionData();

// Tambahkan produk ke keranjang
transaksi.addToCart(apple, 3);  // 3 Apel
transaksi.addToCart(milk, 2);   // 2 Susu
transaksi.addToCart(bread, 1);  // 1 Roti

// Tampilkan total sementara
transaksi.showTotal();

// Checkout (finalisasi transaksi)
transaksi.checkout();