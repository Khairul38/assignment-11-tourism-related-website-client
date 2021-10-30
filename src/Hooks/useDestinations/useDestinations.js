import { useEffect, useState } from 'react';

const useDestinations = () => {
    const [destinations, setDestinations] = useState([]);
    useEffect(() => {
        fetch('/destinations.json')
            .then(res => res.json())
            .then(data => setDestinations(data));
    }, []);
    return { destinations };
};

export default useDestinations;