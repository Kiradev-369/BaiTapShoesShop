import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const {name, image, price,description,quantity} = this.props.sanPhamChiTiet
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{name}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className="col-4"><img src={image} width={"100%"}  /></div>
                    <div className="col-8">
                    <table className="table">
                    <tr>
                        <th>Price:</th>
                        <th>{price}$</th>
                    </tr>
                    <tr>
                        <th>Description:</th>
                        <th>{description}</th>
                    </tr>
                    <tr>
                        <th>Quantity:</th>
                        <th>{quantity}</th>
                    </tr>
                </table>
                    </div>
                </div>
            </div>
           
          </div>
        </div>
      </div>
    );
  }
}
