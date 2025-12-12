export default function CategoryFilter({ category, setCategory }) {
  return (
    <select value={category} onChange={(e)=>setCategory(e.target.value)} className="filter">
      <option value="">All Categories</option>
      <option value="Category A">Category A</option>
      <option value="Category B">Category B</option>
    </select>
  );
}