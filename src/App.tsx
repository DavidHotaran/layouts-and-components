import { useState } from 'react';
import { Input, Navbar } from './components';

function App() {
    const [inputVal, setInputVal] = useState('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setInputVal(e.currentTarget.value);
    return (
        <>
            <div className="bg-gray-900 text-white">
                <div className="flex flex-col h-screen">
                    <Navbar
                        brand={'BrandName'}
                        brandLink="#"
                        navLinks={['link1', 'link1', 'link1', 'link1']}
                    />
                    <div className="flex h-screen">
                        <div className="container max-w-xl mx-auto min-h-screen">
                            {/* <Input
                        labelMessage={'username'}
                        labelPosition={'top'}
                        errorMessage={'* Must be between 6-12 characters.'}
                        type={'text'}
                        placeholder="Enter username"
                        onChange={onChange}
                        value={inputVal}
                    />
                    <div className="mt-4">
                        <Input
                            labelMessage={'username'}
                            labelPosition={'left'}
                            errorMessage={'* Must be between 6-12 characters.'}
                            type={'text'}
                            placeholder="Enter username"
                            onChange={onChange}
                            value={inputVal}
                            />
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
