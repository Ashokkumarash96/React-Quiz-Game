import React, { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://opentdb.com";

const useAxios = ({ url }) => {
  const [res, setRes] = useState(null);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((res) => setRes(res.data))
        .catch((err) => setErr(err))
        .finally(() => setLoading(false));
    };
    fetchData();
  }, [url]);

  return {
    res,
    err,
    loading,
  };
};

export default useAxios;
