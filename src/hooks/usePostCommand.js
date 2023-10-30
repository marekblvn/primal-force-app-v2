import { useState } from "react";

const usePostCommand = ({ command }) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const resetError = () => setError(null);

  const post = async ({ params = {}, successCallback, errorCallback }) => {
    resetError();
    setLoading(true);
    const res = await command({ params });
    // const res = await command({params, token}); TODO: Remove after implementing token context
    setLoading(false);
    if (!res.ok) {
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
