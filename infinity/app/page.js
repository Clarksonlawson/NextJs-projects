"use client"
import Image from 'next/image'
import { Suspense } from 'react'
import Loading from './ui/loading'
import RenderForm from './ui/create/CreateForm'
import { ModeToggle } from '@/components/toggle'
import { Form } from '@/components/ui/form'
import { ProfileForm } from './ui/create/form'
// import { ModeToggle } from '@/components/toggle'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
    <div className="container col-xl-10 col-xxl-8 px-4 py-5 items-center" >
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start items-center">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Welcome to Infinity</h1>
          <p className="col-lg-10 fs-4">Created By Clarkson Awomu</p>
        </div>
        <div className="max-w-md w-full p-8 border border-gray shadow-md rounded-md flex bg-white dark:bg-gray-900">
          <div className="space-y-8">
            
            <ProfileForm />
          </div>
        </div>
      </div>
    </div>
  </main>
  
  )
}
