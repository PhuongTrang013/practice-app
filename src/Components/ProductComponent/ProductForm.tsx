const ProductForm = () => {
  return (
    <div className="card">
      <form className="row g-3">
        <div className="col-12">
          <label htmlFor="inputProductName" className="form-label">
            Product Name
          </label>
          <input type="text" className="form-control" id="inputProductName" />
        </div>
        <div className="col-12">
          <label htmlFor="inputProductDescription" className="form-label">
            Product Description
          </label>
          <input
            type="text"
            className="form-control"
            id="inputProductDescription"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputProductBudget" className="form-label">
            Product Budget
          </label>
          <input type="text" className="form-control" id="inputProductBudget" />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Is active ?
            </label>
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
