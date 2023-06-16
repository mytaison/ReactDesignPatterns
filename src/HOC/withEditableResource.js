import React, { useEffect, useState } from "react";
import axios from "axios";

export const withEditableResource = (Component, resourcePath, resourceName) => {
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(resourcePath);
        setOriginalData(response.data);
        setData(response.data);
      })();
    }, []);

    const onChange = (changes) => {
      setData({ ...data, ...changes });
    };

    const onSave = async () => {
      const response = await axios.post(resourcePath, { [resourceName]: data });
      setOriginalData(response.data);
      setData(response.data);
    };

    const onReset = () => {
      console.log("OnReset is called");
      setData(originalData);
    };

    function captitalizeResourceName(resourceName) {
      return resourceName.charAt(0).toUpperCase() + resourceName.slice(1);
    }
    const resourceProps = {
      [resourceName]: data,
      [`onChange${captitalizeResourceName(resourceName)}`]: onChange,
      [`onSave${captitalizeResourceName(resourceName)}`]: onSave,
      [`onReset${captitalizeResourceName(resourceName)}`]: onReset,
    };
    return <Component {...props} {...resourceProps} />;
  };
};
