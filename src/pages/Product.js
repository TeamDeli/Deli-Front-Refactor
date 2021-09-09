import ProductInformation from "../components/product/ProductInformation";
import ProductRecommend from "../components/product/ProductRecommend";
import { Component } from "react";
import Data from "../kyungmin.json";

class Product extends Component {
  render() {
    return (
      <div className="Product">
        <ProductInformation product={Data.products[0]}></ProductInformation>
        <ProductRecommend
          recommendProduct1={Data.products[1]}
          recommendProduct2={Data.products[2]}
          recommendProduct3={Data.products[3]}
          recommendProduct4={Data.products[4]}
        ></ProductRecommend>
      </div>
    );
  }
}

export default Product;
