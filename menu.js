document.addEventListener("DOMContentLoaded", function () {
    function updateCartCount() {
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const countElement = document.querySelector(".cart-count");
      if (countElement) {
        countElement.textContent = cartItems.length;
      } else {
        console.error("'.cart-count' elementi bulunamadı!");
      }
    }
  
    updateCartCount();
  
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
  
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productBox = this.closest(".product-box");
        const productName = productBox.getAttribute("data-name") || productBox.querySelector("h3").textContent;
        const priceText = productBox.getAttribute("data-price") || productBox.querySelector("p").textContent;
        const productPrice = priceText.replace(/[^0-9]/g, "");
        const productImage = productBox.querySelector("img").src;
  
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const product = {
          name: productName,
          price: productPrice,
          image: productImage,
        };
  
        cartItems.push(product);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
  
        updateCartCount();
  
        alert(productName + " sepete eklendi!");
      });
    });
  });
  