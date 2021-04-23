import { useCart } from "../context/cart-context";
import { showNotification } from "../Utilities/toast";
import { updateCart } from "../Utilities/cart-utilities";
import { useProduct } from "../context/product-context";
import "../styles.css";

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
    <div className="flex w-100 h-100">
      <div className="flex-col w-100">
        {updatedItemsList
          .filter((item) => item.quantity > 0)
          .map((item) => (
            <div
              className="w-100 h-auto mg-1 flex bs pd-2 flex-items-center"
              key={item._id}
            >
              <div className="flex">
                <img className="img-m" src={item.image} alt={item.name} />
                <div className="cont-fluid card-w-20 mg-l-2">
                  <p className="txt-l txt-700"> {item.name} </p>
                  <p>Brand : {item.brand}</p>
                  <p>Material : {item.material}</p>
                  <p>Offer : {item.offer}</p>
                </div>
              </div>

              <div className="card-w-20 flex-col">
                <p className="txt-l txt-500 flex-self-center mg-b-2">
                  {" "}
                  Rs. {item.price}{" "}
                </p>
                <div className="flex flex-space-evenly">
                  <button
                    className="pd-05 mg-05 bdr-none bdr-rad-m btn btn-primary-blue txt-white"
                    onClick={() =>
                      updateCartItems(productList, itemsInCart, item._id, "ADD")
                    }
                  >
                    +
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="pd-05 mg-05 bdr-thick bdr-blue bdr-rad-m btn btn-secondary-blue"
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
        {itemsInCart.length === 0 && (
          <p className="flex-self-center mg-t-2 txt-xl">
            Shop To Add Stuff To Cart!
          </p>
        )}
      </div>

      <div className="cont-fluid w-25 mg-t-2 pd-2">
        <p className="mg-tb-1 txt-l">
          Total Items In Cart : <span className="txt-700">{cartCount}</span>
        </p>
        <p className="mg-tb-1 txt-l">
          Total Cart Price : <span className="txt-700">Rs. {cartPrice}</span>
        </p>
        <button className="btn fill-primary-yellow pd-05 mg-05 h-fit w-fit bdr-rad-m bdr-thick flex-self-center">
          Checkout
        </button>
        <div id="notification-container" style={{ fontSize: "0.7em" }}></div>
      </div>
    </div>
  );
};
