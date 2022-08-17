import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Dashboard() {
    return (
        <div className='bg-slate-700 text-white min-h-screen flex flex-col'>
            <Navbar />
            <div className='flex min-h-full'>
                <div className='w-48 border-r-8 border-r-slate-800'>
                    <div className='flex flex-col items-center'>
                        <Link />
                        <Link />
                        <Link />
                        <Link />
                    </div>
                </div>
                <div className='w-full h-[90vh] md:h-[87.5vh] overflow-y-auto border-slate-800'>
                {Array(100).fill("").map((item, index) => <div key={index}>{index}</div>)}
                </div>
            </div>
            <Footer />
        </div>
    );
};

function Link() {
    return (
        <div className='cursor-pointer text-center hover:text-slate-400'>
            Item
        </div>
    );
};