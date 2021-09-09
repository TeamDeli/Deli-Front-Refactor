import styled from "styled-components";
import React from "react";

const WishWrap = styled.div`
  margin-top: 60px;
  margin-left: 250px;

  h1 {
    margin-left:20px;
    padding: 20px;
    font-weight: bold;
    font-size: 30px;
  }
  .wishContainer {
    display: flex;
    align-items: center;
  }
  h3 {
    text-align: center;
    font-weight: bold;
  }

  div {
    margin-right: 100px;
  }
`;

const WishList = ({name, wishList}) => {
  if (wishList === undefined) {
    wishList = [];
  }
  return (
    <WishWrap>
      <h1>{name}님이 좋아하신 상품입니다.</h1>
      {wishList.length === 0 ? (
        <h3>no items..</h3>
      ) : (
        <span className="wishContainer">
          {wishList.map((product, index) => {
            return (
              <div className="productContainer" key={index}>
                <img
                  className="productImage"
                  src={product.imageUrl}
                  alt={product.productname}
                  width="300px"
                  height="300px"
                ></img>
                <h3>{product.productname}</h3>
              </div>
            );
          })}
        </span>
      )}
    </WishWrap>
  );
};

export default WishList;
