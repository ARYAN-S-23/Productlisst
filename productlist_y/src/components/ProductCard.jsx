export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name}/>
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <p>Category: {product.category}</p>
      <p>Rating: ⭐ {product.rating}</p>
      <button onClick={() => console.log("Added:", product.name)}>Add to Cart</button>
    </div>
  );
}