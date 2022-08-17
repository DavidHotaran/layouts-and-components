export default function Footer() {
    return (
        <footer className='bg-slate-900 min-h-[45px] flex items-center justify-center mt-auto'>
            &#169;{new Date().getFullYear()} {'Your company/You'}
        </footer>
    );
};