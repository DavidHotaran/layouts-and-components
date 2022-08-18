import Button from "../components/Button";

export default function Components() {
    return (
        <div className="flex fle-col h-screen justify-center border-4 bg-slate-700 text-white">
            <div className="mt-4 flex flex-col">
                <Container><Button variant={"primary"} text="primary" /></Container>
                <Container><Button variant={"danger"} text="danger" onClick={() => alert("Danger variant")}/></Container>
                <Container><Button></Button></Container>
            </div>
        </div>
    );
};

function Container({children}) {
    return (
        <div className="mt-4">
            {children}
        </div>
    )
}