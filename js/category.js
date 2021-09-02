const urlParams = new URLSearchParams(window.location.search);
const brands = urlParams.get("brands");

const url = "https://kea-alt-del.dk/t7/api/" + brands;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //   console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);

  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector(".brand").textContent = product.brandname;
  const parent = document.querySelector(".brandnames");
  parent.appendChild(copy);
}
