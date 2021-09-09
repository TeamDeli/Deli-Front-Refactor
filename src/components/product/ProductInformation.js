import { Component } from "react";
import "./ProductInformation.css";

class ProductInformation extends Component {
  render() {
    console.log(this.props.product);
    return (
      <div class="content">
        {/* 제품 설명 부분 */}
        <div class="product">
          {/* 사진 부분 */}
          <div class="product_pic">
            <img
              src={this.props.product.imageUrl}
              width="300px"
              height="300px"
              alt="Product Image"
            ></img>
          </div>
          {/*설명 부분*/}
          <div class="product_info">
            <div>
              <h2>{this.props.product.productname}</h2>
              {/*별점: https://melthleeth.tistory.com/entry/HTML-CSS%EB%A1%9C-%EB%B3%84%EC%B0%8D%EA%B8%B0-Star-Rating*/}
              <div class="star-ratings">
                <div
                  class="star-ratings-fill space-x-2 text-lg"
                  style={{ width: this.props.product.star * 12 }}
                >
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <div class="star-ratings-base space-x-2 text-lg">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>

              <p>{this.props.product.info}</p>
              <p>{this.props.product.info2}</p>
              <div class="hash_info">
                <div class="hash_box">{this.props.product.hash1}</div>
                <div class="hash_box">{this.props.product.hash2}</div>
                <div class="hash_box">{this.props.product.hash3}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductInformation;
