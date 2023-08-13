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
  console.log(pages)
  const [numPages, setNumPages] = useState(1)
  // console.log(users)
  // if (!users.data || users.data===undefined) return <h1>Loading...</h1>
  
  return (
    <div className='flex flex-col justify-center items-center 
      min-h-screen gap-5'>
      <div className='bg-none w-screen grid justify-items-center
      gap-5 py-10 md:px-20 grid-cols-auto'>
        {
          pages.map((page: any, index: number) => {
            if (index + 1 > numPages) return null
            return ( 
            page.data.map((user: any) => (
              <UserCard key={user.id} {...user} suppressHydrationWarning/>
            ))
            )
          })
        }
      </div>
      {/* <button className={`${size+1 === data[0].total_pages ? '' : 'opacity-50'} */}
      <button className={`
        ${numPages === pages.length ? 'opacity-50' : ''}
        bg-gradient-to-tl from-dark_blue to-light_blue
        px-5 py-3 rounded-2xl text-white shadow-lg mb-5`}
        onClick={() => setNumPages(numPages + 1)}
        disabled={numPages === pages.length ? true : false}>
        {/* disabled={size+1 === data[0].total_pages ? false : true}
        onClick={() => setSize(size + 1)}> */}
        Load More
      </button>
    </div>
  )
}

export default Users