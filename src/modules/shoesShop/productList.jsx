import React, { Component } from "react";
import ShoesShopData from "../../../data/shoesShopData.json";
import Product from "./product";

export default class ProductList extends Component {
  renderSanPham = () => {
    const { xemChiTiet } = this.props;
    return ShoesShopData.map((sp, i) => {
      return <Product xemChiTiet={xemChiTiet} sp={sp} key={i} />;
    });
  };

  render() {
    return (
      <div className="container ">
        <div className="row ">{this.renderSanPham()}</div>
      </div>
    );
  }
}
