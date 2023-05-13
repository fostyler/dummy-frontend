import { useState } from 'react'
import { useBabyContext } from '../../contexts/baby'

function BabyInput(){
    const { addBaby } = useBabyContext()

    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')

    const submit = (e) => {
        e.preventDefault()
        addBaby(firstName, middleName, lastName)
    }

    return(
        <div className="section has-background-dark pt-0">
            <div className="columns">
                <div className="column">
                    <h1 className="is-size-3 has-text-light">Add a baby</h1>
                </div>
            </div>
            <form
                onSubmit={submit}
            >
                <div className="columns has-background-light is-vcentered">
                    <div className="column">
                        <label htmlFor="first-name">First Name</label>
                        <input
                            type="text"
                            id="first-name"
                            className="input"
                            value={firstName}
                            onChange={(e)=>{
                                setFirstName(e.target.value)
                            }}
                        />
                    </div>
                    <div className="column">
                        <label htmlFor="middle-name">Middle Name</label>
                        <input  
                            type="text"
                            className="input"
                            value={middleName}
                            onChange={(e)=>{
                                setMiddleName(e.target.value)
                            }}
                        />
                    </div>
                    <div className="column">
                        <label htmlFor="last-name">Last Name</label>
                        <input
                            type="text"
                            className="input"
                            value={lastName}
                            onChange={(e)=>{
                                setLastName(e.target.value)
                            }}
                        />
                    </div>
                    <div className="column is-narrow">
                        <button className="button is-primary mt-5">
                            Add baby
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BabyInput
