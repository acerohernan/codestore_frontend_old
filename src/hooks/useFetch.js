import { useEffect, useState } from "react";

const useFectch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await fetch(url);
      const parserData = await data.json();
      setData(parserData);
      setLoading(false);
      return;
    };

    getData();
  }, [url]);

  return [data, loading];
};

export default useFectch;
