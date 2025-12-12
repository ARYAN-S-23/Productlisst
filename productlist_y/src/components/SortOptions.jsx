export default function SortOptions({ sortType, setSortType }) {
  return (
    <select value={sortType} onChange={(e)=>setSortType(e.target.value)} className="filter">
      <option value="">Sort By</option>
      <option value="low-high">Price: Low → High</option>
      <option value="high-low">Price: High → Low</option>
      <option value="rating">Rating</option>
    </select>
  );
}