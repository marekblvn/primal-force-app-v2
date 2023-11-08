import { useState } from "react";
import { useToken } from "../contexts";

const usePostCommand = ({ command }) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = useToken();

  const resetError = () => setError(null);

  const post = async (params = {}, successCallback, errorCallback) => {
    resetError();
    setLoading(true);
    const res = await command({ params, token });
    setLoading(false);
    if (res.statusText !== "OK") {
      errorCallback && errorCallback(res.data?.error);
      return setError(res.data?.error);
    }
    successCallback(res.data);
    setData(res.data);
  };

  return {
    data,
    loading,
    error,
    post,
  };
};

export default usePostCommand;
