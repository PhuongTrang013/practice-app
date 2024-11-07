import EditButton from "../Button/EditButton";
import { IProduct, Product } from "../../Models/Product";

const ProductCard = ({ product, onEdit }: IProduct) => {
  const handleEditClick = (product: Product) => {
    onEdit(product);
  };

  return (
    <div className="card">
      <img src={product.imageUrl} alt={product.name} />
      <div className="py-2 px-2">
        <h5 className="strong">
          <strong>{product.name}</strong>
        </h5>
        <p>{product.description}</p>
        <p>Budget : {product.budget.toLocaleString()}</p>
        <button
          className="btn btn-secondary"
          onClick={() => handleEditClick(product)}
        >
          <i className="bi bi-pencil-square pe-2"></i>
          Edit
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
