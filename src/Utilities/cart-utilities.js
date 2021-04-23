export const updateCart = (productItems, cartItems, itemToUpdateId, action) => {
  let itemExistsInCart = cartItems.find((item) => item._id === itemToUpdateId);

  if (action === "ADD") {
    if (itemExistsInCart === undefined) {
      let selectedItem = productItems.find(
        (item) => item._id === itemToUpdateId
      );
      selectedItem = { ...selectedItem, quantity: 1 };
      return [...cartItems, selectedItem];
    } else {
      let updatedCartItemList = cartItems.map((item) => {
        if (item._id === itemToUpdateId) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });
      return updatedCartItemList;
    }
  } else {
    if (!(itemExistsInCart === undefined)) {
      console.log("Inside Remove");
      let selectedItem = cartItems.find((item) => item._id === itemToUpdateId);
      console.log("Selected Item", selectedItem);
      if (selectedItem.quantity > 1) {
        let updatedCartItemList = cartItems.map((item) => {
          if (item._id === itemToUpdateId) {
            item.quantity = item.quantity - 1;
          }
          return item;
        });
        return updatedCartItemList;
      } else {
        return cartItems.filter((item) => item._id !== itemToUpdateId);
      }
    }
  }
};
