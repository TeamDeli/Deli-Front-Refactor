import { useEffect, useState } from "react";
import ProductInformation from "../components/product/ProductInformation";
import ProductRecommend from "../components/product/ProductRecommend";
import Axios from "axios";
import Data from "../kyungmin.json";
import { useParams } from "react-router-dom";

function ProductsByFunction(props) {
  const { id } = useParams();
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:8000/deli/product/${id}`).then((response) => {
      if (response.data) {
        console.log(response.data);
        setProduct(response.data);
      } else {
        console.log("데이터를 가져오는데 실패했습니다.");
      }
    });
  }, []);

  return (
    <div className="Product">
      <ProductInformation product={Product}></ProductInformation>
      <ProductRecommend
        recommendProduct1={Data.products[1]}
        recommendProduct2={Data.products[2]}
        recommendProduct3={Data.products[3]}
        recommendProduct4={Data.products[4]}
      ></ProductRecommend>
    </div>
  );
}

export default ProductsByFunction;
