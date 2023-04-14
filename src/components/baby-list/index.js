import { useState, useEffect } from 'react'
import BabyService from '../../services/baby'
function BabyList(){
  const [ babyList, setBabyList ] = useState([])

  useEffect(()=>{
    const getList = async()=>{
      const list = await BabyService.getBabyList()
      setBabyList(list.babies)
    }
    getList()
  },[])

  return (
    <div>
      <table className="table is-bordered is-fullwidth" border="1" style={{margin: '0 auto', fontSize: 32}}>
        <thead>
          <tr className="is-selected">
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(babyList) ? babyList.map((baby)=>(
            <tr key={baby.id}>
              <td>{baby.first_name}</td>
              <td>{baby.middle_name}</td>
              <td>{baby.last_name}</td>
            </tr>
          )):null}
        </tbody>
      </table>
    </div>
  );
}

export default BabyList