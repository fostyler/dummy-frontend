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

  const deleteBaby = async (id) => {
    const { list } = await BabyService.deleteBaby(id)
    setBabyList(list)
  }

  const updateBaby = async (id, firstName, middleName, lastName) => {
    const { babies } = await BabyService.updateBaby(id, firstName, middleName, lastName)
    setBabyList(babies)
  }

  return (
    <BabyContext.Provider value={{ babyList, deleteBaby, updateBaby }}>
      {children}
    </BabyContext.Provider>
  )
}

export { useBabyContext }
export default BabyProvider
