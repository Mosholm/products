const url = "https://kea-alt-del.dk/t7/api/categories";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //   console.log(data);
  data.forEach(showCategory);
}

function showCategory(categories) {
  console.log(categories);
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  //   copy.querySelector("a").setAttribute("href", "product.html?id=" + product.id);
  //   copy.querySelector(".accessories").textContent = `${categories}`;
  //   copy.querySelector(
  //     ".productName"
  //   ).textContent = `${product.productdisplayname}`;
  copy.querySelector(".accessories").textContent = categories;
  //   copy.querySelector(".percent").textContent = `${product.discount}%`;
  //   copy.querySelector(
  //     "img.smallImage"
  //   ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  //   copy.querySelector("img.smallImage").alt = product.productdisplayname;

  //   if (product.soldout) {
  //     copy.querySelector("article").classList.add("soldOut");
  //   }

  //   if (product.discount) {
  //     copy.querySelector("article").classList.add("sale");
  //     copy.querySelector(".discount").textContent = `${
  //       product.price - (product.discount / 100) * product.price
  //     } Kr`;
  //   }

  const parent = document.querySelector(".categoryList");
  parent.appendChild(copy);
}