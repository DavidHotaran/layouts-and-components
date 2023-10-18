import { useState } from 'react';

interface Props {
    labelMessage: string;
    labelPosition: 'top' | 'left';
    errorMessage: string;
    placeholder?: string;
    type: string;
    style?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export function Input({
    labelMessage,
    labelPosition,
    errorMessage,
    placeholder,
    type,
    style,
    onChange,
    value,
}: Props) {
    const [error, setError] = useState(false);

    const errorValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e);
        if (e.target.value.length < 6 || e.target.value.length > 12) {
            setError(true);
        } else {
            setError(false);
        }
    };

    return (
        <div className="flex flex-col">
            <div
                className={`w-full flex  ${
                    labelPosition === 'top' && 'flex-col'
                } ${style && style}`}
            >
                <label
                    className={`text-white mb-1 ${
                        labelPosition === 'left' && 'mr-2'
                    }`}
                >
                    {labelMessage}
                </label>
                <input
                    className={`text-black p-1 w-full outline-none focus:ring-2 ring-blue-400 ${
                        error && 'ring-red-400'
                    } rounded-sm`}
                    type={type}
                    placeholder={placeholder}
                    onChange={errorValidation}
                    value={value}
                />
            </div>
            {error && (
                <span className="text-red-400 text-xs mt-1 ml-1">
                    {errorMessage}
                </span>
            )}
        </div>
    );
}
