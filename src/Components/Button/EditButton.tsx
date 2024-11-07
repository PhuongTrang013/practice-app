import { Product, IProduct } from "../../Models/Product";

const EditButton = ({ product, onEdit }: IProduct) => {
  const handleEditClick = (product: Product) => {
    onEdit(product);
  };

  return (
    <>
      <button
        className="btn btn-secondary"
        onClick={() => handleEditClick(product)}
      >
        <i className="bi bi-pencil-square pe-2"></i>
        Edit
      </button>
    </>
  );
};

export default EditButton;
