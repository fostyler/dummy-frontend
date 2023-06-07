import React from 'react'
import BabyRow from '../baby-row'
import { useBabyContext } from '../../contexts/baby'

function BabyList(){
  const { babyList } = useBabyContext()
  return (
    <div>
      <table className="table is-bordered is-fullwidth" border="1" style={{margin: '0 auto', fontSize: 32}}>
        <thead>
          <tr className="is-selected">
            <th />
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(babyList) ? babyList.map((baby)=>(
            <BabyRow baby={baby} key={baby.id} />
          )):null}
        </tbody>
      </table>
    </div>
  );
}

export default BabyList
