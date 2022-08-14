import { useRouter } from 'next/router'

export default function Home() {
  return (
    <div className='bg-slate-700 text-white h-screen'>
      <div className='flex justify-center'>
        <div className='grid grid-cols-6 gap-6 mt-5'>
          <Card
            href={"/dashboard"}
            name={"Dashboard.js"}
          />
        </div>
      </div>
    </div>
  )
}

function Card({ href, name }) {
  const router = useRouter()
  return (
    <div className='w-40 h-40 border-4 rounded flex items-center justify-center cursor-pointer hover:bg-slate-600'
      onClick={() => router.push(href)}
    >
      {name}
    </div>
  )
}