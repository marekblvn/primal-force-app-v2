const { useState, useEffect } = require("react");

const useGetCommand = ({ command, skip = false, initialParams = {} }) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (error) return;
    if (!skip) {
      get(initialParams);
    }
  }, []);

  const resetError = () => setError(null);

  const get = async (params = {}) => {
    resetError();
    setLoading(true);
    const res = await command(params);
    setLoading(false);
    if (!res.ok) {
      return setError(res.data?.error);
    }
    setData(res.data);
  };

  return {
    data,
    error,
    loading,
    get,
  };
};

export default useGetCommand;
