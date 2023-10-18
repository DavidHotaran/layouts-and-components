import { useState } from "react";

function useEnvValue() {
    const [env, _ ] = useState(import.meta.env.MODE);
    return env;
};

export default useEnvValue;