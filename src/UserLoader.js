import React, { useState, useEffect } from "react";
import axios from "axios";

export const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);
  console.log(children);
  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userId}`);
      const currentUser = response.data;
      setUser(currentUser);
      console.log("Users", currentUser);
    })();
  }, [userId]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};
