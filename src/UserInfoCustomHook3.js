import { useDataSource } from "./CustomHooks/useDataSource";
import axios from "axios";

export const UserInfoCustomHook3 = ({ userId }) => {
  async function getData() {
    const response = await axios.get(`/users/${userId}`);
    console.log("data", response.data);
    return response.data;
  }
  const user = useDataSource(getData);
  const { name, age, hairColor, hobbies } = user || {};
  return user ? (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies: </h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ) : (
    <h3>Loading...</h3>
  );
};
