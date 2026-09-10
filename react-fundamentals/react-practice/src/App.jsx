import { Box2 } from "./components/Box2";

const member = [
  { name: "Caroline", age: 27 },
  { name: "Lily", age: 17 },
  { name: "Mabel", age: 67 },
];

export default function App() {
  return (
    <div>
      {member.map((m) => (
        <Box2 name={m.name} age={m.age} />
      ))}
    </div>
  );
}
