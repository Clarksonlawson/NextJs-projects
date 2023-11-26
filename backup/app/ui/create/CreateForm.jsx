"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RenderForm() {
    const router  = useRouter()
    const [name, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')
    const [loading, isLoading] = useState(false)


    const handleForm = async (e) => {
        e.preventDefault();  
        isLoading(true); 

        const data = {
            name, email, country, phone, password
        }
        

        const res  = await fetch('http://localhost:4000/users',
         {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(data)
        });

        
    
        
        if(res.status === 201){
           router.push("/users")
        }else{
            console.error("An error has occured");
        }
    }

    return (
        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleForm}>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput"
                    placeholder="Jamie Gallagher"
                onChange={(e) =>setFullname(e.target.value)} value={name} required />
                <label htmlFor="floatingInput">Fullname</label> 
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput"
                    placeholder="john.doe@domain.com"
                onChange={(e) =>setEmail(e.target.value)} value={email} required />
                <label htmlFor="floatingInput">Email</label> 
            </div>
            <div className="form-floating mb-3">
                <select className="form-select"  
                    onChange={(e) =>setCountry(e.target.value)} value={country} required>
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
                <input type="number" className="form-control" id="floatingInput"
                    placeholder="+000 111 222 4444"
                onChange={(e) =>setPhone(e.target.value)} value={phone} required />
                <label htmlFor="floatingInput">Phone number</label> 
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingInput"
                    placeholder="+000 111 222 4444"
                onChange={(e) =>setPassword(e.target.value)} value={password} required />
                <label htmlFor="floatingInput">Password</label> 
            </div>
            <button className="w-100 btn btn-lg btn-primary"
                 disabled={loading}>
                    {loading && <span>Signing up...</span>}
                   {!loading && <span>Sign up</span>}
            </button>
            <hr className="my-4" />
            <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
        </form>
    )
}