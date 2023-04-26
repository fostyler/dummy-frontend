import React, { createContext, useContext, useState,useEffect } from 'react'
import BabyService from '../services/baby'

const BabyContext = createContext()

const useBabyContext = () => useContext(BabyContext)

function BabyProvider ({ children }){
  const [ babyList, setBabyList ] = useState([])

  const addBaby = async (firstName, middleName, lastName) =>{
    const { babies } = await BabyService.addBaby(firstName, middleName, lastName)
    setBabyList(babies)
  }

  useEffect(()=>{
    const getList = async()=>{
      const list = await BabyService.getBabyList()
      setBabyList(list.babies)
    }
    getList()
  },[])

  return (
    <BabyContext.Provider value={{ babyList, addBaby }}>
      {children}
    </BabyContext.Provider>
  )
}

export default BabyProvider
export { useBabyContext }