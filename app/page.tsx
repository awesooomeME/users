"use client"

import UserCard from "./components/UserCard";
import useSWRInfinite from 'swr/infinite'

type user = {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string,
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const getKey = (pageIndex: any, previousPageData: any) => {
  if (previousPageData && !previousPageData.total_pages) return null
  return `https://reqres.in/api/users?page=${pageIndex+1}&limit=10`
}

export default function Home() {
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher)

  if (!data || data===undefined) return <h1>Failed to connect to API</h1>
  
  return (
    <main className='flex flex-col justify-center items-center 
      min-h-screen gap-5'>
      <div className='bg-none w-screen grid justify-center items-center
      gap-5 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-20'>
        {/* data is an array of each api request */}
        {data.map((page) => page.data.map((user: user) => {
          return (<UserCard user_id={user.id} email={user.email} key={user.email}
            first={user.first_name} last={user.last_name} avatar={user.avatar}/>)
        }))}
      </div>
      <button className={`${size+1 === data[0].total_pages ? '' : 'opacity-50'}
        bg-gradient-to-tl from-dark_blue to-light_blue
        px-5 py-3 rounded-2xl text-white shadow-lg`}
        disabled={size+1 === data[0].total_pages ? false : true}
        onClick={() => setSize(size + 1)}>
        Load More
      </button>
    </main>
  )
}
