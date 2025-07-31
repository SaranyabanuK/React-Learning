function List() {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

  return (
    <div>
      <h1> Lists & Keys</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}> {fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
