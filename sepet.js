let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");

let totalPrice = 0;

cartItems.forEach((item) => {
  const itemElement = document.createElement("div");
  itemElement.classList.add("cart-item");

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = item.name;

  const details = document.createElement("div");
  details.classList.add("cart-item-details");

  const name = document.createElement("p");
  name.textContent = item.name;

  const price = document.createElement("p");
  price.classList.add("cart-item-price");
  price.textContent = item.price + "₺";

  details.appendChild(name);
  details.appendChild(price);

  itemElement.appendChild(image);
  itemElement.appendChild(details);

  cartItemsContainer.appendChild(itemElement);

  totalPrice += parseInt(item.price);
});

totalPriceElement.textContent = "Toplam: " + totalPrice + "₺";

document
  .getElementById("complete-payment")
  .addEventListener("click", function () {
    window.open("odeme.html", "_blank");
  });
