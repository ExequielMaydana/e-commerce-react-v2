import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'

const PurchasesScreen = () => {

  const [userPurchases, setUserPurchases] = useState()
  
  useEffect(() => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/purchases'
    axios.get(URL, getConfig())
    .then(res => setUserPurchases(res.data.data.purchases))
    .catch(err => console.log(err))
  }, [])
  


  return (
    <div>PurchasesScreen</div>
  )
}

export default PurchasesScreen