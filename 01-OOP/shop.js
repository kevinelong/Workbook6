/*
a website where you can purchase goods without having to leave your home.
A store has a list of products and a list of customers.
A customer has list addresses.
A cart has a list of LineItems.
LineItems that have a product a quantity and extended price.

NOUNS (People places or things).
    
    WebSite/Store
        Name
        Catalog of goods
        Location
        CheckOut

    You/Customer
        First, Last
        Habits, Favorites
        GetRecommendations()
        cart
        
    Cart
        List of Purchases (A product, Cost Each, Quantity, Total Line)
        GetGrandTOtal (Sum plus taxes)
        CheckOut?

    Goods/Products/Services
        Name, Description
        Color, Size
        Buy/Purchase

    Home/Address
        line1 lin2 city state zip country

ADJECTIVES(descriptive, quantity or color, things we know or can see)

VERBS (Action words)
    purchase/buy
    leave vs ship
*/
class Store{
    constructor(){
        this.currentCustomer = undefined;
        this.productList = [];
        this.customerList = [];
    }
    addProduct(product){
        this.productList.push(product);
    }
    addCustomer(customer){
        this.customerList.push(customer);
        this.currentCustomer = customer;
    }
    getCurrentCustomer(){
        return this.currentCustomer;
    }
    showList(){
        console.log("PRODUCT LIST FOR STORE:");
        this.productList.forEach(p=>console.log(p))
    }
}
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    toString(){
        return `${this.name} ($${this.price})`;
    }
}
class LineItem{
    constructor(product, quantity){
        this.product = product;
        this.quantity = quantity;
    }
    extendedPrice(){
        return this.quantity * this.product.price;
    }
    toString(){
        return this.product.toString() + ` QTY: ${this.quantity} = ${this.extendedPrice().toFixed(2)}`;
    }
}
class Cart{
    constructor(){
        this.lineItemList = [];
    }
    addItem(item){
        this.lineItemList.push(item);
    }
    getContents(){
        let output = "";
        output += "CART:\n";
        let total = 0;
        this.lineItemList.forEach(item=>{
            output += item.toString() + "\n";
            total += item.extendedPrice();
        });
        output += "TOTAL: $" + total.toFixed(2) + "\n";
        return output;
    }
    showContents(){
        console.log(this.getContents());
    }
    checkout(){
        console.log("CHecked Out!");
    }
}
class Address{
    constructor(line1,city,state,zip,country){
        this.line1 = line1;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.country = country;
    }
}
class Customer{
    constructor(name){
        this.name = name;
        this.cart = new Cart()
        this.address = undefined;
    }
    addAddress(address){
        this.address = address;
    }
}
//CREATE TESTS FIRST
s = new Store()
s.addProduct(new Product("pencil", 0.12))
s.addProduct(new Product("pad", 1.25))
s.addCustomer(new Customer("Kevin"))
s.showList()
c = s.getCurrentCustomer()
c.cart.addItem(new LineItem(s.productList[0], 10))
c.cart.addItem(new LineItem(s.productList[1], 2))
c.cart.showContents(); // include tax and grand total
c.addAddress(new Address("1234 22nd ave", "portland", "or", "97018", "USA"))
c.cart.checkout(c.address)