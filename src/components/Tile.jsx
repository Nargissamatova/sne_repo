function Tile({ className, value, onClick }) {
  return (
    <div onClick={onClick} className={`tile ${className}`}>
      <h1>{value}</h1>
    </div>
  );
}

export default Tile;
