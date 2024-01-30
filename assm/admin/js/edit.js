// On DOM Load
window.addEventListener("DOMContentLoaded", init);
// CRUD: Update
// B1 Get elements
const form = document.getElementById("form");
const titleElement = document.getElementById("title");
const imageElement = document.getElementById("image");
const descriptionElement = document.getElementById("description");
const categoryElement = document.getElementById("category");
const priceElement = document.getElementById("price");
const API_URL = "http://localhost:3000/products";

let productId = null;

// b2: lang nghe submit
function init() {
  getProductDetail();
  form.addEventListener("submit", handleSubmit);
}

// get ProductId from Url => call APi : getProductDetail +> input value

async function getProductDetail() {
  // productId
  //window.location.search
  productId = window.location.search.split("=")[1];

  // call APi getProductDetail(productId)

  if (!productId) return;

  // call APi getProductDetail(productId)

  try {
    const apiUrl = `http://localhost:3000/products/${productId}`;

    const res = await fetch(apiUrl);

    const productDetail = await res.json();

    // fill info => input value
    titleElement.value = productDetail.title;
    imageElement.value = productDetail.image;
    descriptionElement.value = productDetail.description;
    categoryElement.value = productDetail.category;
    priceElement.value = productDetail.price;
  } catch (error) {
    console.log(error);
  }
}

async function handleSubmit(event) {
  //b1. ngan chan default
  event.preventDefault();
  // 2. Lay du lieu input: element.value
  const title = titleElement.value;
  const image = imageElement.value;
  const description = descriptionElement.value;
  const category = categoryElement.value;
  const price = priceElement.value;

  //b4. validate
  // 3. Check validate: if(!value_1 || !value_2)
  if (!title || !image || !category) {
    alert("Nhap title, image, category vao");
    return;
  }

  const editProduct = {
    title, // newProduct.title = title
    image,
    description,
    category,
    price: price ? Number(price) : 0, // chuyen price sang number
  };
  const apiUrl = `http://localhost:3000/products/${productId}`;

  await fetch(apiUrl, {
    method: "PUT",
    body: JSON.stringify(editProduct),
  });

  window.location.replace("./list.html");

  //b6 call api post (api_url + productId, updateProduct)
}
