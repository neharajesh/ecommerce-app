import { useCart } from "../context/cart-context";
import { useReducer } from "react";
import { useWishlist } from "../context/wishlist-context";
import { Link } from "react-router-dom";
import { showNotification } from "../Utilities/toast";
import { useProduct } from "../context/product-context";
import { updateCart } from "../Utilities/cart-utilities";
import "./products.css";
import { updateWishlist } from "../Utilities/wishlist-utilities";
import { useOffers } from "../context/offers-context";

export const Products = () => {
  const { productList } = useProduct();
  const { offersList } = useOffers();
  const { setCartCount, setCartPrice, itemsInCart, setItemsInCart } = useCart();
  const { itemsInWishlist, setItemsInWishlist } = useWishlist();

  const initialData = {
    inStockOnly: true,
    fastDeliveryOnly: false,
    sortByPrice: null,
    sortByRating: 0,
  };

  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "TOGGLE_STOCK":
        return (state = {
          ...state,
          inStockOnly: !state.inStockOnly,
        });
      case "TOGGLE_DELIVERY":
        return (state = {
          ...state,
          fastDeliveryOnly: !state.fastDeliveryOnly,
        });
      case "SORT_BY_PRICE":
        return (state = {
          ...state,
          sortByPrice: action.payload,
        });
      case "SORT_BY_RATING":
        return (state = {
          ...state,
          sortByRating: action.payload,
        });
      case "INITIAL_DATA":
        return initialData;
      default:
        return state;
    }
  };

  const [
    { inStockOnly, fastDeliveryOnly, sortByPrice, sortByRating },
    dispatch,
  ] = useReducer(reducerFunction, initialData);

  const getPriceSortedData = (existingProductList, sortByPrice) => {
    if (sortByPrice && sortByPrice === "PRICE_HIGH_TO_LOW") {
      return existingProductList.sort((a, b) => b["price"] - a["price"]);
    }
    if (sortByPrice && sortByPrice === "PRICE_LOW_TO_HIGH") {
      return existingProductList.sort((a, b) => a["price"] - b["price"]);
    }
    return existingProductList;
  };

  const getRatingSortedData = (existingProductList, sortByRating) => {
    if (sortByRating === 0) {
      return existingProductList;
    }
    let ratingNumber = sortByRating;
    const sortedProductList = existingProductList.filter(
      (item) => item.rating === ratingNumber
    );
    return sortedProductList;
  };

  const getFilteredData = (
    existingProductList,
    fastDeliveryOnly,
    inStockOnly
  ) => {
    const sortedProductList = existingProductList
      .filter((item) => (fastDeliveryOnly ? item.fastDelivery : true))
      .filter((item) => (inStockOnly ? true : item.inStock));
    return sortedProductList;
  };

  const priceSortedData = getPriceSortedData(productList, sortByPrice);
  const ratingSortedData = getRatingSortedData(priceSortedData, sortByRating);
  const filteredData = getFilteredData(
    ratingSortedData,
    fastDeliveryOnly,
    inStockOnly
  );

  const addToCartHandler = (existingProductList, itemsInCart, productId) => {
    showNotification("Added to Cart");

    const updatedCartList = updateCart(
      existingProductList,
      itemsInCart,
      productId,
      "ADD"
    );

    const currentProduct = existingProductList.find(
      (item) => item._id === productId
    );
    const currentProductPrice = parseFloat(currentProduct.price);
    setCartCount((count) => count + 1);
    setCartPrice((price) => price + currentProductPrice);
    setItemsInCart(updatedCartList);
  };

  const addToWishlistHandler = (existingProductList, productId) => {
    showNotification("Added to Wishlist");
    const updatedWishlist = updateWishlist(
      existingProductList,
      itemsInWishlist,
      productId,
      "ADD"
    );
    setItemsInWishlist(updatedWishlist);
  };

  const addRatingStars = (rating) => {
    let starString = "";
    for (let i = 0; i < rating; i++) {
      starString += "⭐";
    }
    return starString;
  };

  return (
    <>
      <div className="flex w-100">
        <fieldset className="w-auto mg-1 pd-1">
          <legend>Sort By :</legend>
          <label>
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={() => dispatch({ type: "TOGGLE_STOCK" })}
            />
            Show Out of Stock
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={fastDeliveryOnly}
              onChange={() => dispatch({ type: "TOGGLE_DELIVERY" })}
            />
            Show Fast Delivery Only
          </label>
        </fieldset>

        <fieldset className="w-auto mg-1 pd-1">
          <legend>Price :</legend>
          <label>
            <input
              type="radio"
              onChange={() =>
                dispatch({
                  type: "SORT_BY_PRICE",
                  payload: "PRICE_LOW_TO_HIGH",
                })
              }
              checked={sortByPrice && sortByPrice === "PRICE_LOW_TO_HIGH"}
            />
            Low to High
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={() =>
                dispatch({
                  type: "SORT_BY_PRICE",
                  payload: "PRICE_HIGH_TO_LOW",
                })
              }
              checked={sortByPrice && sortByPrice === "PRICE_HIGH_TO_LOW"}
            />
            High To Low
          </label>
        </fieldset>

        <fieldset className="w-auto mg-1 pd-1">
          <legend>Rating :</legend>
          <label>
            <input
              type="radio"
              onChange={() => dispatch({ type: "SORT_BY_RATING", payload: 1 })}
              checked={sortByRating && sortByRating === 1}
            />
            ⭐
          </label>{" "}
          <br />
          <label>
            <input
              type="radio"
              onChange={() => dispatch({ type: "SORT_BY_RATING", payload: 2 })}
              checked={sortByRating && sortByRating === 2}
            />
            ⭐⭐
          </label>{" "}
          <br />
          <label>
            <input
              type="radio"
              onChange={() => dispatch({ type: "SORT_BY_RATING", payload: 3 })}
              checked={sortByRating && sortByRating === 3}
            />
            ⭐⭐⭐
          </label>{" "}
          <br />
          <label>
            <input
              type="radio"
              onChange={() => dispatch({ type: "SORT_BY_RATING", payload: 4 })}
              checked={sortByRating && sortByRating === 4}
            />
            ⭐⭐⭐⭐
          </label>{" "}
          <br />
          <label>
            <input
              type="radio"
              onChange={() => dispatch({ type: "SORT_BY_RATING", payload: 5 })}
              checked={sortByRating && sortByRating === 5}
            />
            ⭐⭐⭐⭐⭐
          </label>{" "}
          <br />
        </fieldset>

        <button
          className="btn fill-primary-yellow pd-05 mg-05 h-50 w-fit bdr-rad-m bdr-thick flex-self-center"
          onClick={() => dispatch({ type: "INITIAL_DATA" })}
        >
          Reset Filters
        </button>
      </div>

      <div className="h-auto w-100 flex flex-row-wrap mg-tb-1 mg-r-2">
        {filteredData.map(
          ({ _id, name, image, price, rating, inStock, fastDelivery }) => (
            <div
              key={_id}
              className="product-item card bdr-thin bdr-none bs bdr-rad-m mg-05 flex"
            >
              <img
                className="img-m mg-05 flex-self-center"
                src={image}
                alt={name}
              />
              <div className="w-100 mg-1 flex-col-center-items-y">
                <p className="txt-700 txt-l">{name}</p>
                <p className="txt-l txt-700 txt-grey mg-tb-025 txt-blue">
                  Rs. {price}
                </p>
                <p className="mg-tb-05">{addRatingStars(rating)}</p>
                {!inStock && (
                  <span className="card-overlay txt-l txt-700">
                    OUT OF STOCK
                  </span>
                )}
                {fastDelivery && (
                  <span className="badge-tl fill-primary-yellow txt-700 pd-025 txt-s">
                    fast delivery
                  </span>
                )}
                <div id="cont-fluid w-100">
                  <button
                    className="product-button pd-05 mg-05 bdr-none bdr-rad-m btn btn-primary-blue txt-white"
                    onClick={() =>
                      addToCartHandler(filteredData, itemsInCart, _id)
                    }
                  >
                    Add to Cart
                  </button>
                  <button
                    className="product-button pd-05 mg-05 bdr-thick bdr-blue bdr-rad-m btn btn-secondary-blue"
                    id="button-wishlist"
                    onClick={() => addToWishlistHandler(filteredData, _id)}
                  >
                    Add to Wishlist
                  </button>
                </div>
                <br />
                <Link
                  id="view-details"
                  className="txt-black"
                  to={`/products/${_id}`}
                >
                  View Details
                </Link>
              </div>
            </div>
          )
        )}
        <div id="notification-container"></div>
      </div>
    </>
  );
};
