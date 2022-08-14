export default function Footer() {
    return (
        <footer className='bg-slate-900 h-10 flex items-center justify-center'>
            &#169;{new Date().getFullYear()} {'Your company/You'}
        </footer>
    );
};