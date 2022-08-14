import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Dashboard() {
    return (
        <div className='bg-slate-700 text-white h-full'>
            <Navbar />
            <div className='flex h-[100%]'>
                <div className='w-48 border-4 border-slate-800'>
                    <div className='flex flex-col items-center h-full'>
                        <Link />
                        <Link />
                        <Link />
                        <Link />
                    </div>
                </div>
                <div className='w-full flex justify-center border-4 border-slate-800'>
                    <div className='w-96 h-96'>
                        main content
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

function Link() {
    return (
        <div className='cursor-pointer text-center hover:bg-slate-300 hover:text-black w-full'>
            Item
        </div>
    );
};