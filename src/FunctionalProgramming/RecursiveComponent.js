const isObject = (x) => typeof x === "object" && x !== null;

export const RecursiveComponent = ({ data }) => {
  if (!isObject(data)) {
    return (
      <ul>
        <li>{data}</li>
      </ul>
    );
  }
  const pairs = Object.entries(data);
  return (
    <ul>
      {pairs.map(([key, value]) => {
        return (
          <li key={key}>
            {key}:
            <RecursiveComponent data={value} />
          </li>
        );
      })}
    </ul>
  );
};
