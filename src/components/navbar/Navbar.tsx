import { useState } from 'react';

interface Props {
    brand: string;
    navLinks: string[];
    brandLink?: string;
}

export function Navbar({ brand, navLinks, brandLink }: Props) {
    const [active, setActive] = useState<undefined | number>(undefined);

    return (
        <div className="w-full bg-gray-700 p-3">
            <div className="max-w-7xl mx-auto flex justify-between">
                <div className="text-xl font-bold italic">
                    <a href={brandLink && brandLink}>{brand}</a>
                </div>
                <div>
                    {navLinks.map((navLink: string, idx: number) => {
                        return (
                            <a
                                className={`mr-6 ${
                                    active === idx && 'text-blue-500'
                                } hover:text-blue-400`}
                                href="#"
                                onClick={() => setActive(idx)}
                                key={idx}
                            >
                                {navLink}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
