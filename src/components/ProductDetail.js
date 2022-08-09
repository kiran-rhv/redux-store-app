import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  console.log("Selected Param ID :", productId);
  const dispatch = useDispatch();
  console.log("Selected product :", product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    // console.log("Product API response : ", response.data);
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="container my-5">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="row py-5">
          <div className="col-md-6 text-center">
            <img className="mx-auto" src={image} width={250} height={250} />
          </div>
          <div className="col-md-6">
            <h1>{title}</h1>
            <h4 className="text-primary">${price}</h4>
            <h6 className="text-capitalize border border-info d-inline-block py-2 px-3 rounded-pill">
              {category}
            </h6>
            <p>{description}</p>
            <div className="btn btn-outline-primary shadow-none outline-none">
              Add to Cart
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
