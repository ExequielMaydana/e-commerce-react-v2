import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/styleCardProduct.css'

const ProductCard = ({product}) => {

  const navigate = useNavigate()

  const handleNavigateProductId = () => {
    navigate(`/product/${product.id}`)
  }

  return (
    <article className='card-product' onClick={handleNavigateProductId}>

        <figure className='container-figure'>
            <img src={product.productImgs[1]} alt='img-products' className='img-front'/>
            <img src={product.productImgs[0]} alt='img-products' className='img-back'/>
        </figure>
        
        <section className='info-container'>
            <h3 className='product-name'>{product.title}</h3>
            <div className='product-price'>
                <p className='price-text'>Price:</p>
                <p className='price'>${product.price}</p>
            </div>
        </section>
        <button className='card-product-btn'><i className="fa-solid fa-cart-shopping"></i></button>
    </article>
  )
}

export default ProductCard