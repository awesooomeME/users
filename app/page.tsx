import UserCard from "./components/UserCard";

export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center 
      min-h-screen gap-5'>
      <div className='bg-none w-screen grid justify-center items-center
      gap-5 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-20'>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
      </div>
      <button className='bg-gradient-to-tl from-dark_blue to-light_blue
        px-5 py-3 rounded-2xl text-white shadow-lg'>
        Load More
      </button>
    </main>
  )
}
