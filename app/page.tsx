"use client"

import UserCard from "./components/UserCard";
import { useState, useEffect } from 'react'
import useSWR from 'swr'

type user = {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string,
}

// const getData = async (page: number) => {

// }

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Home() {

  const {data, error, isLoading} = useSWR("https://reqres.in/api/users?page=1", fetcher) 
  if (error) return <h1>Failed to connect to API</h1>
  if (isLoading) return <h1>Page is Loading</h1>
  
  return (
    <main className='flex flex-col justify-center items-center 
      min-h-screen gap-5'>
      <div className='bg-none w-screen grid justify-center items-center
      gap-5 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-20'>
        {data.data.map((user: user) => {
          return (<UserCard user_id={user.id} email={user.email} 
            first={user.first_name} last={user.last_name} avatar={user.avatar}/>)
        })}
      </div>
      <button className='bg-gradient-to-tl from-dark_blue to-light_blue
        px-5 py-3 rounded-2xl text-white shadow-lg'>
        Load More
      </button>
    </main>
  )
}
