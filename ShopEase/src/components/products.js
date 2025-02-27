import Button from "./button";

export default function ProductCard({
  filteredProducts,
  USD_TO_RUPEES,
  onSetCartProducts,
  cartProducts,
}) {
  return (
    <div className="product-box">
      {filteredProducts.map((product, index) => (
        <Product
          key={index}
          product={product}
          USD_TO_RUPEES={USD_TO_RUPEES}
          onSetCartProducts={onSetCartProducts}
          cartProducts={cartProducts}
        />
      ))}
    </div>
  );
}

function Product({ product, USD_TO_RUPEES, onSetCartProducts, cartProducts }) {
  function handleCartProducts() {
    const existingProduct = cartProducts.find((p) => p.id === product.id);
    if (existingProduct) {
      const updatedCart = cartProducts.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      onSetCartProducts(updatedCart);
    } else {
      onSetCartProducts([...cartProducts, { ...product, quantity: 1 }]);
    }
  }
  return (
    <div className="product">
      <div className="product_img">
        <img src={product.image} alt="" />
      </div>

      <h5 className="title">{product.title}</h5>
      <p className="description">{product.description}</p>
      <p className="price">
        <span className="undiscounted-price">
          Rs. {(product.price * USD_TO_RUPEES).toFixed(2)}
        </span>
        {"      "} Rs.
        {(
          product.price * USD_TO_RUPEES -
          product.price * USD_TO_RUPEES * 0.1
        ).toFixed(2)}
      </p>
      <p className="category">Category : {product.category}</p>
      <div className="ratings">
        <p>
          Ratings : {product.rating.rate}({product.rating.count})
        </p>
      </div>
      <Button
        className="button"
        onClick={(id) => handleCartProducts(product.id)}
      >
        <svg
          viewBox="0 0 16 16"
          className="bi bi-cart-check"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
        >
          <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
        </svg>
        <p className="text">Add to Cart</p>
      </Button>
    </div>
  );
}
