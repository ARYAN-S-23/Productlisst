import { useState } from "react";
import { products as productData } from "./data/products";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import SortOptions from "./components/SortOptions";
import ProductList from "./components/ProductList";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [sortType, setSortType] = useState("");

  let filtered = productData.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (category) filtered = filtered.filter((p) => p.category === category);

  if (sortType === "low-high") filtered.sort((a, b) => a.price - b.price);
  else if (sortType === "high-low") filtered.sort((a, b) => b.price - a.price);
  else if (sortType === "rating") filtered.sort((a, b) => b.rating - a.rating);

  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="controls">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CategoryFilter category={category} setCategory={setCategory} />
        <SortOptions sortType={sortType} setSortType={setSortType} />
      </div>
      <ProductList products={filtered} />
    </div>
  );
}