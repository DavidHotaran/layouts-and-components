export default function Button({ variant, onClick = null, text = "click" }) {

    let cls = "inline-block rounded-md py-1 px-2 ";
    switch (variant) {
        case "primary":
            cls += "bg-blue-600 hover:bg-blue-400";
            break;
        case "danger":
            cls += "bg-red-600 hover:bg-red-400";
            break;
        default:
            cls += "border-2"
            break;
    };

    return (
        <button
            className={cls}
            onClick={onClick}
        >
            {text}
        </button>
    );
};