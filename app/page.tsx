import UserCard from "./components/UserCard";
import useSWRInfinite from 'swr/infinite'
import Users from "./components/Users";

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



// export const getServerSideProps = async () => {
//   const res = await fetch(`https://reqres.in/api/users?page=1`)
//   const users = await res.json()

//   // if
//   return {
//     props: { users }
//   }
// }

const getUsers = async (pages: number) => {
  const [page1Res, page2Res] = await Promise.all([
    fetch(`https://reqres.in/api/users?page=1`),
    fetch(`https://reqres.in/api/users?page=2`)
  ])

  const [page1, page2] = await Promise.all([
    page1Res.json(),
    page2Res.json()
  ])
  return [page1, page2]
}

export default async function Home() {
  const pages = await getUsers(1)
  // console.log(users)
  // if (!users.data || users.data===undefined) return <h1>Loading...</h1>
  
  return (
    <main className='grid place-content-center min-h-screen'>
      <Users pages={pages}/>
    </main>
  )
}