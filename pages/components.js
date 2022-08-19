import Button from "../components/Button";
import Input from "../components/Input";
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router'

export default function Components() {
    const [inputVal, setInputVal] = useState("");
    const router = useRouter();
    const ref = useRef(null);
    const idToScrollTo = router.asPath.split("#")[1];

    useEffect(() => {
        if (ref.current) ref.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }, []);

    return (
        <div className="flex justify-center min-h-screen h-full border-4 bg-slate-700 text-white">
            <div className="mt-4 flex flex-col /*w-full*/ align-middle">
                <Container><Button variant={"primary"} text="primary" /></Container>
                <Container><Button variant={"danger"} text="danger" onClick={() => alert("Danger variant")} /></Container>
                <Container>
                    <Input
                        onChange={(e) => setInputVal(e.target.value)}
                        value={inputVal}
                        placeholder="Search..."
                    />
                </Container>
                {/* {Array(100).fill("").map((_, i) => <div ref={i === idToScrollTo ? ref : null} id={i} key={i}>TEST</div>)} */}
            </div>
        </div>
    );
};

function Container({ children }) {
    return (
        <div className="mt-4">
            {children}
        </div>
    );
};