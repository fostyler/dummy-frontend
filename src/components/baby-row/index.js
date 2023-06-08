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
      <td className="is-narrow">
        <button className="button is-primary"
        onClick={async ()=>{
          if (isEditing){
            setIsDisabled(true)
            await updateBaby(baby.id, firstName, middleName, lastName)
            setIsDisabled(false)
          }
          setIsEditing(!isEditing)
        }}
        disabled={isDisabled}
        >
          {isEditing ? 'Save' : 'Change'}
        </button>
      </td>
      <td>{isEditing ? (
        <input
          type="text"
          value={firstName}
          onChange={(e)=>{
            setFirstName(e.target.value)
          }}
          className="input"
          disabled={isDisabled} 
          />
      ) : firstName}</td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={middleName}
            onChange={(e)=>{
              setMiddleName(e.target.value)
            }}
            className="input"
            disabled={isDisabled}
          />
        ) : baby.middle_name}
        </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={lastName}
            onChange={(e)=>{
              setLastName(e.target.value)
            }}
            className="input"
            disabled={isDisabled}
            />
        ) : baby.last_name}
        </td>
    </tr>
  )
}

export default BabyRow