'use client'

import { useState } from "react";
import UserCard from "./UserCard";
import useSWRInfinite from 'swr/infinite'

type user = {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string,
}

const Users = ({pages}: any) => {
  const [numPages, setNumPages] = useState(1)
  
  return (
    <div className='flex flex-col justify-center items-center 
      min-h-screen gap-5'>
      <div className='bg-none w-screen grid justify-items-center
      gap-5 py-10 md:px-20 grid-cols-auto'>
        {
          pages.map((page: any, index: number) => {
            if (index + 1 > numPages) return null
            return ( 
            page.data.map((user: user) => (
              <UserCard key={user.id} {...user}/>
            ))
            )
          })
        }
      </div>
      <button className={`
        ${numPages === pages.length ? 'opacity-50' : ''}
        bg-gradient-to-tl from-dark_blue to-light_blue
        px-5 py-3 rounded-2xl text-white shadow-lg mb-5`}
        onClick={() => setNumPages(numPages + 1)}
        disabled={numPages === pages.length ? true : false}>
        Load More
      </button>
    </div>
  )
}

export default Users