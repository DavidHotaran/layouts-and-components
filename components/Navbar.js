export default function Navbar() {
    return (
        <div className='bg-slate-900 min-h-[45px] flex items-center pl-8'>
            <NavBrand />
            <NavLink />
            <NavLink />
            <NavLink />
            <NavLink />
        </div>
    );
};

function NavBrand() {
    return (
        <a className="text-2xl mx-2 cursor-pointer hover:text-slate-400">Brand</a>
    );
};

function NavLink() {
    return (
        <a className="cursor-pointer mx-2 mt-1 hover:text-slate-400" >Link</a>
    );
};