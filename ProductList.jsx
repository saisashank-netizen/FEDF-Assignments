import React from "react";

function ProductList({ products, onRemove }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <strong>{product.name}</strong>
          {" - ₹"}
          {product.price}

          <button
            onClick={() =>
              onRemove(product.id)
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default React.memo(ProductList);