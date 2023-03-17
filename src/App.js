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
        <table border="1">
          <tr>
            <td>First Name</td>
            <td>Middle Name</td>
            <td>Last Name</td>
          </tr>
          {Array.isArray(babyList) ? babyList.map((baby)=>(
            <tr>
              <td>{baby.first_name}</td>
              <td>{baby.middle_name}</td>
              <td>{baby.last_name}</td>
            </tr>
          )):null}
        </table>
    </div>
  );
}

export default App;
