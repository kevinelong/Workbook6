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


//CREATE TESTS FIRST
s = Store()
s.addProduct(new Product("pencil", 0.12))
s.addCustomer(new Customer("Kevin"))
s.showList()
c = s.getCurrentCustomer()
c.cart.addItem("pencil", 10)
c.cart.addItem("pad", 2)
c.cart.showContents(); // include tax and grand total
c.customer.addAddress(new Address("1234 22nd ave", "portland", "or", "97018", "USA"))
c.cart.checkout(address)




