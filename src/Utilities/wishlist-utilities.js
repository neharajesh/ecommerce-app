import { showNotification } from "./toast";

export const updateWishlist = (
  productItems,
  wishlistItems,
  itemToUpdateId,
  action
) => {
  let itemExistsInWishlist = wishlistItems.find(
    (item) => item._id === itemToUpdateId
  );

  if (action === "ADD") {
    if (itemExistsInWishlist === undefined) {
      let selectedItem = productItems.find(
        (item) => item._id === itemToUpdateId
      );
      return [...wishlistItems, selectedItem];
    } else {
      showNotification("Item already in Wishlist!");
      return wishlistItems;
    }
  } else {
    if (!(itemExistsInWishlist === undefined)) {
      let selectedItem = wishlistItems.find(
        (item) => item._id === itemToUpdateId
      );
      console.log("Selected Item", selectedItem);
      return wishlistItems.filter((item) => item._id !== itemToUpdateId);
    }
  }
};
