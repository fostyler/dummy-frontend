import { useState } from 'react'
import { useBabyContext } from '../../contexts/baby'

function BabyRow({ baby }){
  const { deleteBaby, updateBaby } = useBabyContext()
  const [ isEditing, setIsEditing ] = useState(false)
  const [ isDisabled, setIsDisabled ] = useState(false)
  const [ firstName, setFirstName ] = useState(baby.first_name)
  const [ middleName, setMiddleName ] = useState(baby.middle_name)
  const [ lastName, setLastName ] = useState(baby.last_name)
  return (
    <tr key={baby.id}>
      <td className="is-narrow">
        <button
          className="button is-danger"
          onClick={()=>{
            deleteBaby(baby.id)
          }}
        >Delete</button>
      </td>
      <td>{firstName}</td>
      <td>{middleName}</td>
      <td>{lastName}</td>
    </tr>
  )
}

export default BabyRow
