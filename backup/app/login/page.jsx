import { DemoCreateAccount } from "../ui/login";

export default function Login(){
    return ( <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
    <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
      
        <DemoCreateAccount />
      
    </div>
  
  </div>)
}