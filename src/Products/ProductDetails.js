import { useParams } from "react-router";
import { useOffers } from "../context/offers-context";
import { useProduct } from "../context/product-context";
import { GiRoundStar } from "react-icons/gi";
import "../styles.css";

export const ProductDetails = () => {
  const { offersList } = useOffers();
  const { productList } = useProduct();
  const { productId } = useParams();
  const product = productList.find((item) => item._id === productId);
  const offerId = product.offers[0];
  const offer = offersList.find((item) => item._id === offerId);

  const addRatingStars = (rating) => {
    let starString = [];
    for (let i = 0; i < rating; i++) {
      starString.push(<GiRoundStar size={20} className="mg-025 txt-yellow" />);
    }
    return starString;
  };

  return (
    <div className="product-details h-75 w-100 mg-2 pd-l-2 flex flex-items-center">
      <img className="img-xl" src={product.image} alt={product.name} />
      <div className="cont-fluid">
        <p className="txt-xl txt-700">{product.name}</p>

        <p className="mg-1">{product.description}</p>

        <p className="mg-1">
          <span className="txt-700">Material :</span> {product.material}
        </p>
        <p className="mg-1">
          <span className="txt-700">Brand :</span> {product.brand}
        </p>
        <p className="mg-1">
          <span className="txt-700">Color :</span> {product.color}
        </p>
        <p className="mg-1">
          <span className="txt-700">Offer :</span> {offer.name}
        </p>

        <p className="mg-1">{addRatingStars(product.rating)}</p>

        <p className="txt-l txt-500 mg-1">
          {!product.inStock && "Re-stocked in 5 days."}
        </p>
        <p className="mg-1">
          {product.fastDelivery ? "FAST DELIVERY" : "DELIVERY IN 3 DAYS"}
        </p>

        <p className="mg-tb-1">
          <span
            className={
              offer.discount > 0
                ? "txt-l txt-700 txt-blue txt-strikethough"
                : "txt-l txt-700 txt-blue"
            }
          >
            Rs. {product.price}
          </span>
          <span className="txt-xl txt-700 txt-yellow mg-l-05">
            {offer.discount > 0 &&
              `Rs. ${product.price - (product.price * offer.discount) / 100}`}
          </span>
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
        </div>
      </div>
    </div>
  );
};
