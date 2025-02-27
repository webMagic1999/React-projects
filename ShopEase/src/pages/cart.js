import "../css/cart.css";
import Button from "../components/button";

export default function Cart({
  cartProducts,
  onSetCartProducts,
  USD_TO_RUPEES,
}) {
  const totalPrice = cartProducts.reduce(
    (acc, el) => acc + el.price * el.quantity * USD_TO_RUPEES,
    0
  );
  const totalItems = cartProducts.reduce((acc, el) => acc + el.quantity, 0);

  return (
    <div className="cart">
      <div className="total">
        <h6>Total items : </h6>
        <p>{totalItems}</p>
      </div>
      <div className="items">
        <table>
          <thead>
            <tr>
              <th colSpan="2">Image</th>
              <th colSpan="5">Title</th>
              <th colSpan="3">Price</th>
              <th colSpan="5">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((el, index) => (
              <CartItem
                key={index}
                product={el}
                USD_TO_RUPEES={USD_TO_RUPEES}
                onSetCartProducts={onSetCartProducts}
                cartProducts={cartProducts}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="total">
        <h6>Total Price : </h6>
        <p>Rs.{totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}

function CartItem({ product, USD_TO_RUPEES, cartProducts, onSetCartProducts }) {
  function handleQtyDecrease() {
    if (product.quantity <= 1) return;
    const updatedCart = cartProducts.map((p) =>
      p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
    );
    onSetCartProducts(updatedCart);
  }

  function handleQtyIncrease() {
    const updatedCart = cartProducts.map((p) =>
      p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
    );
    onSetCartProducts(updatedCart);
  }
  return (
    <tr>
      <td colSpan="2">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
      </td>
      <td colSpan="5">
        <div className="product-title">
          <h6>{product.title}</h6>
        </div>
      </td>
      <td colSpan="3">
        <p>
          Rs.{(product.price * product.quantity * USD_TO_RUPEES).toFixed(2)}
        </p>
      </td>
      <td colSpan="5">
        <div className="qty-custom">
          <Button onClick={handleQtyDecrease}>-</Button>
          <p>{product.quantity}</p>
          <Button onClick={handleQtyIncrease}>+</Button>
        </div>
      </td>
    </tr>
  );
}
