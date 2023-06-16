import { withEditableResource } from "./HOC/withEditableResource";
import { withEditableUser } from "./HOC/withEditableUser";

export const UserInfoForm = withEditableUser(
  ({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {};
    return user ? (
      <>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            value={name}
            onChange={(e) => onChangeUser({ name: e.target.value })}
          />
        </label>
        <label htmlFor="age">
          Age:
          <input
            id="age"
            value={age}
            onChange={(e) => onChangeUser({ age: e.target.value })}
          />
        </label>
        <label htmlFor="haircolor">
          Haircolor:
          <input
            id="haircolor"
            value={hairColor}
            onChange={(e) => onChangeUser({ hairColor: e.target.value })}
          />
        </label>
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onSaveUser}>Save</button>
      </>
    ) : (
      <p>Loading...</p>
    );
  },
  1234
);

export const UserInfoFormForResource = withEditableResource(
  ({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {};
    return user ? (
      <>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            value={name}
            onChange={(e) => onChangeUser({ name: e.target.value })}
          />
        </label>
        <label htmlFor="age">
          Age:
          <input
            id="age"
            value={age}
            onChange={(e) => onChangeUser({ age: e.target.value })}
          />
        </label>
        <label htmlFor="haircolor">
          Haircolor:
          <input
            id="haircolor"
            value={hairColor}
            onChange={(e) => onChangeUser({ hairColor: e.target.value })}
          />
        </label>
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onSaveUser}>Save</button>
      </>
    ) : (
      <p>Loading...</p>
    );
  },
  "/users/2345",
  "user"
);
