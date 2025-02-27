import { useEffect, useState } from "react";

export function useGeoLocation() {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Location access denied. Please search manually.");
      return;
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (posi) => {
        setPosition({
          lat: posi.coords.latitude,
          lon: posi.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }, []);

  return { position, error, isLoading };
}
