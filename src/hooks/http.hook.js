import { useState, useCallback } from 'react';

export const useHttp = () => {

    const [loading, setLoading] = useState(false);

    const request = useCallback( async (api, method='GET', body=null, headers={}) => {
        setLoading(true);
        try{        
            const response = await fetch(api, { method, body, headers});
            
            const data = await response.json();
            if (!response.ok){
                setLoading(false)   
                throw new Error('Error');
            }
            setLoading(false)
            return data;

        }catch(e) {
            setLoading(false);
        }


    }, []);

    return {request, loading};
}