import nextAuth from "next-auth";
import { Provider } from "next-auth/providers";
import { Provider } from "react-wrap-balancer";

export default nextAuth({
    providers:[
        Provider.Credentials({
            name: "Credentials",
            credentials:{
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            }
        })
    ]
})
