const API_URL = "https://fakestoreapi.com/products";

export default async function getProducts() {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
}
