export default function Input({ placeholder = "Type here...", onChange = null, value = "" }) {
    return (
        <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="focus:ring focus:ring-blue-400 rounded-md p-1 w-full focus:outline-none text-black"
        />
    )
}