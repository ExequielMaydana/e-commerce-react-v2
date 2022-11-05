import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../store/slices/products.slice';
import FilterMobile from '../filters/FilterMobile';
import FilterProducstOrName from '../filters/FilterProducstOrName';
import FilterProductsOrCatPrice from '../filters/FilterProductsOrCatPrice';
import ProductCard from './ProductCard';
import './styles/styleHome.css'

const HomeScreen = () => {

  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, []);

  return (
    <section className='home'>

        <FilterProducstOrName/>
        <div className='home_filterMobile'>
        <FilterMobile/>
        </div>

      <div className='container-products'>
      <div className='aside-Container'>
      <FilterProductsOrCatPrice/>
      </div>
      <div className='container-card'>
      {
            products.map(product => (
              <ProductCard 
                key={product.id}
                product={product}
              />
            ))
          }
      </div>
         
        </div>
        
    </section>
  )
}

export default HomeScreen