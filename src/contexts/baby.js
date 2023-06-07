import React, { createContext, useContext, useState, useEffect } from 'react'
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

  const deleteBaby = async (id) => {
    const { babies } = await BabyService.deleteBaby(id)
    setBabyList(babies)
  }

  const updateBaby = async (id, firstName, middleName, lastName) => {
    const { babies } = await BabyService.updateBaby(id, firstName, middleName, lastName)
    setBabyList(babies)
  }
  // Data that's going to be sent to the rest of app.
  return (
    <BabyContext.Provider value={{ babyList, addBaby, deleteBaby, updateBaby }}>
      {children}
    </BabyContext.Provider>
  )
}

export { useBabyContext }
export default BabyProvider