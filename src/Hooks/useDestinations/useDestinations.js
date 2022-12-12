import { useEffect, useState } from "react";

const useDestinations = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch(
      "https://assignment-11-tourism-related-website-server.vercel.app/destinations"
    )
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);
  return { destinations };
};

export default useDestinations;
