console.log("hi mom");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://kea-alt-del.dk/t7/api/products/" + id;

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".price").textContent = product.price;
  document.querySelector(".brand").textContent = product.brandname;
  document.querySelector(".productName").textContent =
    product.productdisplayname;
  // document.querySelector(".category").textContent = product.subcategory;

  document.querySelector(
    "img.productImg"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector(".productImg").alt = product.productdisplayname;
}

//productlist list --> template--> clone--> link to productlist page
