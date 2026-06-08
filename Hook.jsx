import {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import ProductList from "./ProductList";

export default function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 25000 },
    { id: 3, name: "Mouse", price: 1000 },
    { id: 4, name: "Keyboard", price: 2000 },
  ]);

  const [search, setSearch] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    document.title = search
      ? `Search: ${search}`
      : "Products";
  }, [search]);

  const filteredProducts = products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const totalPrice = useMemo(() => {
    return filteredProducts.reduce(
      (sum, product) => sum + product.price,
      0
    );
  }, [filteredProducts]);

  const removeProduct = useCallback((id) => {
    setProducts((prev) =>
      prev.filter((product) => product.id !== id)
    );
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Search & Price Calculator</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        onClick={() => inputRef.current.focus()}
      >
        Focus Search
      </button>

      <h3>Total Price: ₹{totalPrice}</h3>

      <ProductList
        products={filteredProducts}
        onRemove={removeProduct}
      />
    </div>
  );
}