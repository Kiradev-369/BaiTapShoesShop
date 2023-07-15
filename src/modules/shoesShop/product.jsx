import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const {name, price, image} = this.props.sp
    const {xemChiTiet} = this.props
    return (
      <div className="card col-3">
        <img className="card-img-top" src={image} />
        <div className="card-body">
          <h4 style={{fontSize: 15}} className="card-title">{name}</h4>
          <p className="card-text">{price}$</p>
          <button onClick={()=>{xemChiTiet(this.props.sp)}} className="btn btn-success" data-toggle="modal" data-target="#modelId">Xem chi tiết</button>
        </div>
      </div>
    );
  }
}
