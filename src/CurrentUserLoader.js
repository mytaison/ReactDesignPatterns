import React, { useState, useEffect } from "react";
import axios from "axios";

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(children);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      const currentUser = response.data;
      setUser(currentUser);
      console.log("Users", currentUser);
    })();
  }, []);

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
