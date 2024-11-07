import React, { useState } from "react";
import { Product } from "../../Models/Product";
import ProductCard from "../../Components/ProductComponent/ProductCard";
import ProductForm from "../../Components/ProductComponent/ProductForm";

interface IProductList {
  products: Product[];
}

const ProductList = ({ products }: IProductList) => {
  const [productEdited, setProductEdited] = useState({});
  const handleEdit = (product: Product) => {
    setProductEdited(product);
  };

  return (
    <>
      <div className="row">
        <h3>Products Page</h3>
      </div>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-3 py-2">
            {product === productEdited ? (
              <ProductForm />
            ) : (
              <ProductCard product={product} onEdit={handleEdit} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
