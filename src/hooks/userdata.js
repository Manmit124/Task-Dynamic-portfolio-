import React, { useEffect, useState } from "react";

export default function UserProfile() {
  const [data, setdata] = useState({});
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  useEffect(() => {
    setloading(true);
    fetchuserinfo();
  }, []);
  const fetchuserinfo = async () => {
    try {
      const res = await fetch(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      );
      const data = await res.json();
      setdata(data);
      setloading(false);
      console.log(data);
    } catch (error) {
      seterror(error);
      setloading(false);
    }
  };
  return {
    loading,
    data,
    error,
  };
}
