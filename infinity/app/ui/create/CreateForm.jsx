"use client"

import createuser from "./actions";
import { useFormState } from 'react-dom'
import { useFormStatus } from 'react-dom'

const initialstate = {
    message: null
}

export function SubmitButton(){
    const { pending } = useFormStatus()
    return <button className="w-100 btn btn-lg btn-primary" disabled={pending}>
                Sign up
            </button>
}
export default function RenderForm() {
    const [state, formAction] = useFormState(createuser, initialstate)
    

    return (
        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" action={formAction}>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput1"
                    placeholder="Jamie Gallagher" name="fullname" required />
                <label htmlFor="floatingInput1">Fullname</label> 
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput2"
                    placeholder="john.doe@domain.com" name="email"
                 required />
                <label htmlFor="floatingInput2">Email</label> 
            </div>
            <div className="form-floating mb-3">
                <select className="form-select"  
                    name="country" required>
                    <option value={"Nigeria"}>Nigeria</option>
                    <option value={"United States"}>United States</option>
                    <option value={"Canada"}>Canada</option>
                    <option value={"United Kingdom"}>United Kingdom</option>
                    <option value={"Australia"}>Australia</option>
                    <option value={"Germany"}>Germany</option>
                    <option value={"France"}>France</option>
                    <option value={"Japan"}>Japan</option>
                    <option value={"India"}>India</option>
                    <option value={"Brazil"}>Brazil</option>
                </select>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingInput4"
                    placeholder="+000 111 222 4444"
                name="phone" required />
                <label htmlFor="floatingInput4">Phone number</label> 
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingInput5"
                    placeholder="+000 111 222 4444"
                name="password" required />
                <label htmlFor="floatingInput5">Password</label> 
            </div>
            <SubmitButton />
            <p>
                {state?.message}
            </p>
            <hr className="my-4" />
            <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
        </form>
    )
}