import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig'
import PurchasesCard from './PurchasesCard'
import './styles/stylePurchases.css'

const PurchasesScreen = () => {

  const [userPurchases, setUserPurchases] = useState()

  const navigate = useNavigate()
  
  useEffect(() => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/purchases'
    axios.get(URL, getConfig())
    .then(res => setUserPurchases(res.data.data.purchases))
    .catch(err => console.log(err))
  }, [])
  
  console.log(userPurchases);

  const toBackHome = () => {
    navigate('/')
  }

  return (
    <div className='purchases'>
      <div className='purchases-title'>
        <p onClick={toBackHome}>Home</p>
        <span></span>
        <p>My Purchases</p>
      </div>
    <div className='purchases__container'>
      {
        userPurchases?.map(purchase => (
          <PurchasesCard 
            key={purchase.id}
            purchase={purchase}
          />
        ))
      }
    </div>
  </div>
  )
}

export default PurchasesScreen