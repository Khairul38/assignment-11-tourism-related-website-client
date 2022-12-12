import { useEffect } from "react";
import { useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      "https://assignment-11-tourism-related-website-server.vercel.app/packages"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return { services };
};

export default useServices;
