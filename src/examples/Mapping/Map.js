const fruits = ["Apple", "Banana", "Cherry"];

export default function Map() {
  return (
 <h2>Fruits List
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
    </h2>
  );
}
