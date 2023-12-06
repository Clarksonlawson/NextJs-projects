import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/toggle'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start items-center">
       
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Welcome to Infinity</h1>
            <p className="col-lg-10 fs-4">Created By Clarkson Awomu</p>
           
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
           {/* <Suspense fallback={<Loading />} */}
           {/* ></Suspense> */}
           
            <ModeToggle />
          {/* {} <RenderForm /> */} 
          </div>
        </div>
      </div>
           <Button>hffi</Button>
    </main>
  )
}
