

export default class ProductModel
{
    constructor(id, name, desc, imageUrl, category, price, sizes, rating)
    {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.imageUrl = imageUrl;
        this.category = category;
        this.price = price;
        this.sizes = sizes;
        this.rating = rating;
    }

    static GetAll()
    {
        return products;
    }
}

let products = 
[
    new ProductModel(
        {
            "id": "P001",
            "name": "Classic Cotton T-Shirt",
            "desc": "A versatile and comfortable cotton t-shirt, perfect for casual wear. Available in various colors.",
            "imageUrl": "https://example.com/images/tshirt.jpg",
            "category": "Apparel",
            "price": 19.99,
            "sizes": ["XS", "S", "M", "L", "XL"],
            "rating": 4.5
        }      
    ),
    new ProductModel(
        {
            "id": "P123",
            "name": "Wireless Bluetooth Earbuds",
            "desc": "Experience true wireless freedom with our Bluetooth earbuds. Crystal-clear sound and long battery life.",
            "imageUrl": "https://example.com/images/earbuds.jpg",
            "category": "Electronics",
            "price": 79.99,
            "rating": 4.2
        } 
    ),
    new ProductModel(
        {
            "id": "P987",
            "name": "Organic Herbal Tea Set",
            "desc": "Indulge in a selection of hand-picked organic herbal teas. Relax and enjoy the soothing flavors.",
            "imageUrl": "https://example.com/images/herbal_tea.jpg",
            "category": "Food & Beverage",
            "price": 29.95,
            "rating": 4.8
        }          
    ),
    new ProductModel(
        {
            "id": "P567",
            "name": "Professional DSLR Camera",
            "desc": "Capture stunning photos and videos with our high-performance DSLR camera. Perfect for photography enthusiasts.",
            "imageUrl": "https://example.com/images/dslr_camera.jpg",
            "category": "Electronics",
            "price": 1299.99,
            "rating": 4.9
        }
    ),
    new ProductModel(
        {
            "id": "P777",
            "name": "Outdoor Camping Backpack",
            "desc": "Embark on outdoor adventures with our durable camping backpack. Designed to carry all your essentials.",
            "imageUrl": "https://example.com/images/backpack.jpg",
            "category": "Outdoor Gear",
            "price": 89.95,
            "rating": 4.6
        }          
    )
];