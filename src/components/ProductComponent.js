import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles/ProductComponent.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="col-md-4" key={id}>
        <div className="my-3">
          <Link to={`/product/${id}`} className="text-decoration-none">
            <div className="card-deck">
              <div className="card">
                <img
                  src={image}
                  className="text-center my-5 mx-auto"
                  alt="Product-picture"
                  width={200}
                  height={200}
                />
                <div className="card-body text-dark">
                  <div className="card-title two-lines-limit">{title}</div>
                  <div className="text-success">${price}</div>
                  <div className="text-capitalize text-muted">{category}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="row">{renderList}</div>
    </>
  );
};

export default ProductComponent;
