import { useState, useEffect } from 'react'
import BabyService from './services/baby'

function App() {
  const [ babyList, setBabyList ] = useState([])
  useEffect(()=>{
    const getList = async()=>{
      const list = await BabyService.getBabyList()
      setBabyList(list.babies)
      console.log('list', list.babies)
    }
    getList()
  },[])

  return (
    <div>
      {Array.isArray(babyList) ? babyList.map((baby)=>(
        <p>{baby.first_name} {baby.middle_name} {baby.last_name}</p>
      )):null}
    </div>
  );
}

export default App;
