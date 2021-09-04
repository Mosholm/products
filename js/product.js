const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://kea-alt-del.dk/t7/api/products/" + id;

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  document.querySelector(".brand").textContent = product.brandname;
  document.querySelector(".productName").textContent =
    product.productdisplayname;

  document.querySelector(".price").textContent = product.price;
  document.querySelector(".percent").textContent = `${product.discount}%`;
  document.querySelector(".description").textContent = product.description;
  document.querySelector(".model").textContent = product.subcategory;

  document.querySelector(
    "img.productImg"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector(".productImg").alt = product.productdisplayname;

  if (product.soldout) {
    document.querySelector(".productInfo").classList.add("soldOut");
  }

  if (product.discount) {
    document.querySelector(".productInfo").classList.add("sale");
    document.querySelector(".discount").textContent = `${
      product.price - (product.discount / 100) * product.price
    } Kr`;
  }
}

function goBack() {
  window.history.back();
}
