import React, { createContext, useState } from "react";
export const WishlistContext = createContext();
function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  
  function addWishlist(product) {
    const isProductinwishlist = wishlist.some(
      (item) => item._id === product.id
    );
    if (!isProductinwishlist) {
      setWishlist([...wishlist, product]);
    }
  }
  function removeWishlist(id) {
    const updateWishlist = wishlist.filter((item) => item._id !== id);
    setWishlist(updateWishlist);
  }
  function isProductinWishlist(id) {
    const isProductinwishlist = wishlist.some((item) => item._id === id);
    return isProductinwishlist;
  }
  function wishlistCount() {
    return wishlist.length;
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addWishlist,
        removeWishlist,
        isProductinWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;
