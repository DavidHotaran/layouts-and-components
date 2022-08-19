export default function Home() {
  return (
    <div className='bg-slate-700 text-white h-screen'>
      <div className="grid grid-cols-2 h-full">
        <div className="border-r-2">
          <h1 className='text-center pt-6 text-3xl underline font-bold'>Layouts</h1>
          <div className='flex justify-center mt-4'>
            <div className='grid grid-cols-3 gap-6 mt-5'>
              <Card
                href={"/dashboard"}
                name={"Dashboard.js"}
              />
            </div>
          </div>
        </div>
        <div className="border-l-2">
          <h1 className='text-center pt-6 text-3xl underline font-bold'>Components</h1>
          <div className='flex justify-center mt-4'>
            <div className='grid grid-cols-3 gap-6 mt-5'>
              <Card
                href={"/components"}
                name={"Button"}
              />
              <Card
                href={"/components"}
                name={"Footer"}
              />
              <Card
                href={"/components"}
                name={"Input"}
              />
              <Card
                href={"/components/"}
                name={"Navbar"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Card({ href, name }) {
  return (
    <div className='w-40 h-40 border-4 rounded flex items-center justify-center cursor-pointer hover:bg-slate-600 hover:text-blue-400'
      onClick={() => window.open(href, "_blank", "noreferrer")}
    >
      {name}
    </div>
  )
}