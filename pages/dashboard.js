import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`

export default function Dashboard() {
    return (
        <div className="flex flex-col text-white min-h-screen h-full">
            <Navbar />
            <div className="flex">
                <div className="fixed top-[45px] left-0 h-full w-40 bg-slate-800">  {/* top-[45px] is dependant on the height of navbar, adjust accordingly */}
                    <div className='flex flex-col items-center'>
                        <SideBarLink />
                        <SideBarLink />
                        <SideBarLink />
                        <SideBarLink />
                    </div>
                </div>
                <div className="flex flex-col ml-40 bg-gray-700 min-h-screen h-full w-full  items-center"> {/* ml-40 is dependant on the width of sidebar, adjust accordingly */}
                    {Array(10).fill("").map((_, index) =>
                        <div key={index} className="border-2 rounded w-11/12 my-3 px-3 py-3">
                            {lorem}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

function SideBarLink() {
    return (
        <div className='cursor-pointer text-center hover:text-slate-400'>
            Item
        </div>
    );
};