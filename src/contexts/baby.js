import React, { createContext, useContext, useState, useEffect } from 'react'
import BabyService from '../services/baby'

const BabyContext = createContext()

const useBabyContext = () => useContext(BabyContext)

function BabyProvider ({ children }){
  const [ babyList, setBabyList ] = useState([])

  useEffect(()=>{
    const getList = async()=>{
      const list = await BabyService.getBabyList()
      setBabyList(list.babies)
    }
    getList()
  },[])

  return (
    <BabyContext.Provider value={{ babyList }}>
      {children}
    </BabyContext.Provider>
  )
}

export default BabyProvider
export { useBabyContext }
