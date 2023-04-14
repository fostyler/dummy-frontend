import React from 'react'
import { useBabyContext } from '../../contexts/baby'

function BabyList(){
  const { babyList } = useBabyContext()
  return (
    <div>
        <table border="1" style={{margin: '0 auto', fontSize: 32}}>
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

export default BabyList
