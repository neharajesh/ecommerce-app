import { useParams } from "react-router";
import { useProduct } from "../context/product-context";
import "../styles.css";

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
    <div className="h-auto w-75 mg-2 flex">
      <div className="cont-fluid">
        <p className="txt-xl txt-700">{product.name}</p>
        <p className="mg-1">{addRatingStars(product.rating)}</p>
        <p className="mg-1">
          <span className="txt-700">Material :</span> {product.material}
        </p>
        <p className="mg-1">
          <span className="txt-700">Brand :</span> {product.brand}
        </p>

        <p className="txt-l txt-500 mg-1">
          {!product.inStock && "Re-stocked in 5 days."}
        </p>
        <p className="mg-1">
          {product.fastDelivery ? "FAST DELIVERY" : "DELIVERY IN 3 DAYS"}
        </p>

        <div className="flex card-w-25 flex-items-center-y">
          <div className="cont-fluid">
            <button className="pd-05 mg-05 bdr-none bdr-rad-m btn btn-primary-blue txt-white card-w-20">
              Add to Cart
            </button>{" "}
            <br />
            <button className="pd-05 mg-05 bdr-thick bdr-blue bdr-rad-m btn btn-secondary-blue card-w-20">
              Add to Wishlist
            </button>
          </div>
          <p className="txt-xl txt-500 txt-blue">Rs. {product.price}</p>
        </div>
      </div>
      <img className="img-xl" src={product.image} alt={product.name} />
    </div>
  );
};
