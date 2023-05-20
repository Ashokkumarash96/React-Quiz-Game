import React, { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://opentdb.com";

const useAxios = ({ url }) => {
  const [res, setRes] = useState(null); // State variable to store the response data
  const [err, setErr] = useState(""); // State variable to store the error
  const [loading, setLoading] = useState(true); // State variable to track loading state

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url) // Send a GET request to the specified URL
        .then((res) => setRes(res.data)) // Set the response data in the state
        .catch((err) => setErr(err)) // Set the error in the state
        .finally(() => setLoading(false)); // Set loading to false when the request is completed
    };
    fetchData(); // Call the fetchData function to initiate the API request
  }, [url]);

  return {
    res, // Response data
    err, // Error
    loading, // Loading Animation
  };
};

export default useAxios;
