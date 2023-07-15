import React, { Component } from 'react'
import ProductList from './productList'
import shoesShopData from '../../../data/shoesShopData.json'
import Modal from './modal'
import Header from './header'
import Carousel from './carousel'
import Footer from './footer'

export default class ShoesShop extends Component {
    state = {
        sanPhamChiTiet: shoesShopData[0]
    }

    xemChiTiet=(spct)=>{
        this.setState({
            sanPhamChiTiet: spct
        })

    }
    render() {
    return (
      <div>
        <Header/>
        <Carousel/>
        <h3 className='text-success text-center mt-5'>Shoes Shop</h3>
        <ProductList xemChiTiet={this.xemChiTiet}/>
        <Modal sanPhamChiTiet={this.state.sanPhamChiTiet}/>
        <Footer/>
      </div>
    )
  }
}
