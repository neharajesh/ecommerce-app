import { useWishlist } from "../context/wishlist-context";
import { showNotification } from "../Utilities/toast";

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
      <div className="wishlist-container">
        {itemsInWishlist.map((item) => (
          <div
            className="wishlist-item"
            key={item.id}
            style={{
              border: "1px solid black",
              margin: "1rem",
              padding: "1rem",
            }}
          >
            <img src={item.image} alt={item.name} />
            <div className="wishlist-details">
              <p id="wishlist-details-name">{item.name}</p>
              <p id="wishlist-details-price">{item.price}</p>
              <button
                className="button-primary"
                onClick={() => removeFromWishlist(itemsInWishlist, item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        {itemsInWishlist.length === 0 && "wishlist is empty"}
        <div id="notification-container"></div>
      </div>
    </>
  );
};
