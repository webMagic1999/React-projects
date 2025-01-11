import { useEffect, useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import ProductCard from "./components/products";
import FilterSortPanel from "./components/filter_sort";
import { Loading, Error } from "./components/other";
import Cart from "./pages/cart";
import Services from "./pages/services";
import Contact from "./pages/contact";
import AboutUs from "./pages/about";

function App({ onHandleGetProduct, menuItems }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currPage, setCurrPage] = useState("home");
  const [cartProducts, setCartProducts] = useState([]);
  const USD_TO_RUPEES = 85.49; // can be fetched by api as well

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await onHandleGetProduct();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, [onHandleGetProduct]);

  return (
    <div className="App">
      <Header menuItems={menuItems} onHandlePage={setCurrPage} />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <main>
          {currPage === "home" && (
            <Main
              filteredProducts={filteredProducts}
              USD_TO_RUPEES={USD_TO_RUPEES}
              onSetFilteredProducts={setFilteredProducts}
              originalProducts={products}
              onSetCartProducts={setCartProducts}
              cartProducts={cartProducts}
            />
          )}
          {currPage === "cart" && (
            <Cart
              cartProducts={cartProducts}
              onSetCartProducts={setCartProducts}
              USD_TO_RUPEES={USD_TO_RUPEES}
            />
          )}
          {currPage === "about us" && <AboutUs />}
          {currPage === "services" && <Services />}
          {currPage === "contact" && <Contact />}
        </main>
      )}
      <Footer />
    </div>
  );
}

function Main({
  filteredProducts,
  USD_TO_RUPEES,
  onSetFilteredProducts,
  originalProducts,
  onSetCartProducts,
  cartProducts,
}) {
  function handleFilterSort({ filter = "all", sort = "relevance" }) {
    let updatedProducts = [...originalProducts];
    if (filter !== "all") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === filter
      );
    }

    if (sort === "lowToHigh") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "highToLow") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }
    onSetFilteredProducts(updatedProducts);
  }
  return (
    <>
      <FilterSortPanel onHandleFilterSort={handleFilterSort} />
      <ProductCard
        filteredProducts={filteredProducts}
        USD_TO_RUPEES={USD_TO_RUPEES}
        onSetCartProducts={onSetCartProducts}
        cartProducts={cartProducts}
      />
    </>
  );
}

export default App;
