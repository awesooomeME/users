import Users from "./components/Users";

const getUsers = async () => {
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
  const pages = await getUsers()
  
  return (
    <main className='grid place-content-center min-h-screen'>
      <Users pages={pages}/>
    </main>
  )
}