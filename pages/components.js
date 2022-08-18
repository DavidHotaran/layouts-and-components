import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from 'react';

export default function Components() {
    const [inputVal, setInputVal] = useState("");
    return (
        <div className="flex justify-center h-screen border-4 bg-slate-700 text-white">
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
            </div>
        </div>
    );
};

function Container({ children }) {
    return (
        <div className="mt-4">
            {children}
        </div>
    )
}