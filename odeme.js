document.getElementById("card-number").addEventListener("input", function (event) {
  let input = event.target;
  let value = input.value.replace(/\D/g, "").slice(0, 16);
  let formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 ");
  input.value = formattedValue;
});

document.getElementById("expiry-date").addEventListener("input", function (event) {
  let input = event.target;
  let value = input.value.replace(/\D/g, "").slice(0, 4);
  if (value.length >= 2) {
    value = value.slice(0, 2) + "/" + value.slice(2);
  }
  input.value = value;
});

document.getElementById("payment-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const cardNumber = document.getElementById("card-number").value.replace(/\D/g, "");
  const cardName = document.getElementById("card-name").value;
  const expiryDate = document.getElementById("expiry-date").value;
  const cvc = document.getElementById("cvc").value;

  if (cardNumber.length === 16 && cardName && expiryDate.length === 5 && cvc.length === 3) {
    alert("Ödeme başarıyla tamamlandı!\nTeşekkür ederiz, " + cardName + ".");
    localStorage.removeItem("cartItems");
    document.getElementById("payment-form").reset();
    window.location.href = "anasayfa.html";
  } else {
    alert("Lütfen tüm alanları doğru ve eksiksiz doldurun.");
  }
});
