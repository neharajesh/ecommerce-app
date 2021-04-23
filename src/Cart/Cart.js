import { useCart } from "../context/cart-context";
import { showNotification } from "../Utilities/toast";
import { updateCart } from "../Utilities/cart-utilities";
import { useProduct } from "../context/product-context";

export const Cart = () => {
  const {
    cartCount,
    setCartCount,
    cartPrice,
    setCartPrice,
    itemsInCart,
    setItemsInCart,
  } = useCart();

  const { productList } = useProduct();
  console.log(itemsInCart);
  const updateCartItems = (
    existingProductList,
    itemsInCart,
    productId,
    action
  ) => {
    const updatedCartList = updateCart(
      existingProductList,
      itemsInCart,
      productId,
      action
    );
    console.log("UpdatedCartItems Are");
    console.log(updatedCartList);
    let cartTotal = updatedCartList.reduce((prev, current) => {
      return prev + current.quantity * current.price;
    }, 0);
    setCartCount((count) => updatedCartList.length);
    setCartPrice(cartTotal);
    setItemsInCart(updatedCartList);
    if (action === "ADD") showNotification("Added to Cart");
  };

  const updatedItemsList = itemsInCart.filter((item) => item.quantity > 0);

  return (
    <div className="cart-page-container">
      <div className="cart-container">
        {updatedItemsList
          .filter((item) => item.quantity > 0)
          .map((item) => (
            <div className="cart-item" key={item._id}>
              <div className="cart-details-container">
                <img id="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <p id="cart-item-name"> {item.name} </p>
                  <p>Brand : {item.brand}</p>
                  <p>Material : {item.material}</p>
                  <p>Offer : {item.offer}</p>
                </div>
              </div>

              <div className="cart-price-container">
                <p id="cart-item-price"> Rs. {item.price} </p>
                <div className="cart-button-container">
                  <button
                    className="button-primary"
                    id="cart-button-add"
                    onClick={() =>
                      updateCartItems(productList, itemsInCart, item._id, "ADD")
                    }
                  >
                    +
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="button-secondary"
                    id="cart-button-remove"
                    onClick={() =>
                      updateCartItems(
                        productList,
                        itemsInCart,
                        item._id,
                        "REMOVE"
                      )
                    }
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
        {itemsInCart.length === 0 && "shop to add stuff to cart!"}
      </div>

      <div className="cart-sidebar">
        <p>
          Total Items In Cart :{" "}
          <span id="cart-sidebar-highlight">{cartCount}</span>
        </p>
        <p>
          Total Cart Price ={" "}
          <span id="cart-sidebar-highlight">Rs. {cartPrice}</span>
        </p>
        <button id="checkout-button" className="button-primary">
          Checkout
        </button>
        <div id="notification-container" style={{ fontSize: "0.7em" }}></div>
      </div>
    </div>
  );
};
