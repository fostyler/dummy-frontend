import { useState } from 'react'
import { useBabyContext } from '../../contexts/baby'

function BabyInput(){
    const { addBaby } = useBabyContext()

    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')

    const submit = (e) => {
        e.preventDefault()
        console.log('fire!', firstName, middleName, lastName)
        addBaby(firstName, middleName, lastName)
    }
    return(
        <form
            onSubmit={submit}
        >
            <input type="text"
            value={firstName}
            onChange={(e)=>{
                setFirstName(e.target.value)
            }}
            />
            <input type="text"
            value={middleName}
            onChange={(e)=>{
                setMiddleName(e.target.value)
            }}
            />
            <input type="text"
            value={lastName}
            onChange={(e)=>{
                setLastName(e.target.value)
            }}
            />
            <button>
                Add baby
            </button>
        </form>
    )
}

export default BabyInput