import { useToken } from "../contexts";

const { useState, useEffect } = require("react");

const useGetCommand = ({
  command,
  skip: skipInitial = false,
  initialParams = {},
}) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = useToken();

  useEffect(() => {
    if (error) return;
    if (!skipInitial) {
      get(initialParams);
    }
  }, []);

  const resetError = () => setError(null);

  const get = async (params = {}) => {
    resetError();
    setLoading(true);
    const res = await command({ params, token });
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
