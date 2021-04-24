import { useWishlist } from "../context/wishlist-context";
import { showNotification } from "../Utilities/toast";
import "../styles.css";

export const Wishlist = () => {
  const { itemsInWishlist, setItemsInWishlist } = useWishlist();

  const removeFromWishlist = (currentList, itemId) => {
    showNotification("Removed from Wishlist");
    const currentItem = currentList.find((item) => item.id === itemId);
    const updatedList = itemsInWishlist.filter(
      (item) => item.id !== currentItem.id
    );
    setItemsInWishlist(updatedList);
  };

  return (
    <>
      <div className="flex flex-row-wrap mg-1">
        {itemsInWishlist.map((item) => (
          <div
            className="cont-fluid mg-1 pd-1 bdr-rad-m card-w-20 bs"
            key={item.id}
          >
            <img className="img-xl" src={item.image} alt={item.name} />
            <div className="flex-col">
              <p className="txt-l txt-700 mg-1">{item.name}</p>
              <p className="txt-l txt-500 mg-1"> Rs. {item.price}</p>
              <button
                className="pd-05 mg-1 bdr-thick bdr-blue bdr-rad-m btn btn-secondary-blue card-w-10"
                onClick={() => removeFromWishlist(itemsInWishlist, item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        {itemsInWishlist.length === 0 && (
          <p className="flex-self-center mg-t-2 txt-xl">Wishlist is Empty!</p>
        )}
        <div id="notification-container"></div>
      </div>
    </>
  );
};
