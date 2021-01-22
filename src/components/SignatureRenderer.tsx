import {useEffect, useRef} from 'react';
import {useAppState} from "../hooks/useAppState";
import {generateSignature} from "../lib/generate-signature";

export function SignatureRenderer() {
    const ref = useRef<HTMLDivElement>(null);

    const userDetails = useAppState();

    useEffect(() => {
        if (ref.current) {
            ref.current.innerHTML = generateSignature(userDetails);
        }
    }, [userDetails, ref])


    return <div ref={ref}>&nbsp;</div>
}
