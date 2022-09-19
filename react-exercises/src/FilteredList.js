import { useEffect, useMemo, useState } from "react";

const persons = [
  { id: 1, name: "John", age: 45 },
  { id: 2, name: "Jane", age: 38 },
  { id: 3, name: "Mark", age: 15 }, // non verà renderizzato
  { id: 4, name: "Julia", age: 19 },
  { id: 5, name: "Paul", age: 13 }, // non verrà renderizzato
];

export function FilteredList({ peopleList = persons }) {
  const [list, setList] = useState(peopleList);

  const filterAdults = useMemo(
    () => list.filter((person) => person.age >= 18),
    [list]
  );
  useEffect(() => {
    setList(filterAdults);
  }, [list]);

  return (
    <div>
      <h2>Filtered List :</h2>
      <ul>
        {list &&
          list.map((obj) => (
            <li key={obj.id}>
              {obj.name}, {obj.age}
            </li>
          ))}
      </ul>
    </div>
  );
}
