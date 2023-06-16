import { useState, useEffect } from "react";

export const useDataSource = (getDataSourceFunc) => {
  const [resource, setResource] = useState(null);
  useEffect(() => {
    (async () => {
      const result = await getDataSourceFunc();
      setResource(result);
    })();
  }, []);
  return resource;
};
