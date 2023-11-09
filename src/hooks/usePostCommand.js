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
    console.log("res: ", res);
    if (res.status !== 200 && res.status !== 201) {
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
