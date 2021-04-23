import { useParams } from "react-router";
import { useProduct } from "../context/product-context";

export const ProductDetails = () => {
  const { productList } = useProduct();
  const { productId } = useParams();
  const product = productList.find((item) => item._id === productId);

  console.log(product);

  const addRatingStars = (rating) => {
    let starString = "";
    for (let i = 0; i < rating; i++) {
      starString += "⭐";
    }
    return starString;
  };

  return (
    <div className="product-details-page-container">
      <div className="product-details-container">
        <div>
          <h1>{product.name}</h1>
          <p>Rating : {addRatingStars(product.rating)}</p>
          <p>Material : {product.material}</p>
          <p>Brand : {product.brand}</p>
          <p id="product-details-price">Rs. {product.price}</p>
          <div className="product-details-button-container">
            <button className="button-primary">Add to Cart</button> <br />
            <button className="button-secondary">Add to Wishlist</button>
          </div>
          <p>{product.inStock ? "IN STOCK" : "OUT OF STOCK"}</p>
          <p>{product.fastDelivery ? "FAST DELIVERY" : "DELIVERY IN 3 DAYS"}</p>
        </div>
        <img src={product.image} alt={product.name} />
      </div>
    </div>
  );
};
