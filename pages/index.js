export default function Home() {
  return (
    <div className='bg-slate-700 text-white h-screen'>
      <h1 className='text-center pt-6 text-3xl underline font-bold'>Layouts</h1>
      <div className='flex justify-center mt-4'>
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
  return (
    <div className='w-40 h-40 border-4 rounded flex items-center justify-center cursor-pointer hover:bg-slate-600'
      onClick={() => window.open(href, "_blank", "noreferrer")}
    >
      {name}
    </div>
  )
}