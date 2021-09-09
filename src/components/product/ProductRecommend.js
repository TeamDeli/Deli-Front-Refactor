import { Component } from 'react';
import './ProductInformation.css';

class ProductRecommend extends Component {
    render() {
      return (
        <div class="other_product">
            <h2>비슷한 상품</h2>
            <div class="similar_products">
                <div>
                    <img src={this.props.recommendProduct3.picture} width="200px" height="200px" alt="Product Image"></img>
                    <h3>{this.props.recommendProduct1.name}</h3>
                    <p>{this.props.recommendProduct1.info}</p>
                </div>
                <div>
                    <img src={this.props.recommendProduct2.picture} width="200px" height="200px" alt="Product Image"></img>
                    <h3>{this.props.recommendProduct2.name}</h3>
                    <p>{this.props.recommendProduct3.info}</p>
                </div>
                <div>
                    <img src={this.props.recommendProduct3.picture} width="200px" height="200px" alt="Product Image"></img>
                    <h3>{this.props.recommendProduct3.name}</h3>
                    <p>{this.props.recommendProduct3.info}</p>
                </div>
                <div>
                    <img src={this.props.recommendProduct4.picture} width="200px" height="200px" alt="Product Image"></img>
                    <h3>{this.props.recommendProduct4.name}</h3>
                    <p>{this.props.recommendProduct4.info}</p>
                </div>
            </div>
        </div>
      )
    }
  }

export default ProductRecommend;

