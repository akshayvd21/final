import React, { useState, useEffect } from "react";

const UserLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { latitude: "", longitude: "" },
  });

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        latitude: Number(location.coords.latitude),
        longitude: Number(location.coords.longitude),
      },
    });
    console.log(typeof latitude);
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default UserLocation;
