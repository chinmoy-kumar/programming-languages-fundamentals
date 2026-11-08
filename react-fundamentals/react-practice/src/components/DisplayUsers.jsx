import { useEffect, useState } from "react";
import InfoBox from "./InfoBox";

function DisplayUsers() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  //> using old format
  /*     useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) =>{
            if(!res.ok)
            {
                throw new Error(res.message || "Error message is here");
            }
            return res.json()
        })
        .then((data) => setData(data))
        .catch((err) => setError(err.message))
        .finally(() => {
            setIsLoading(false);
        });
    }, []) */

  //> using new ES6 async-await format
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
          throw new Error(res.message || "Error message is here");
        }
        
        const data = await res.json();
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  //* shows loading message
  if (isLoading) return <p>Loading...</p>;

  //* shows error message
  if (error) return <p>{error}</p>;

  return (
    <div>
      {data.map((user) => (
        <InfoBox name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default DisplayUsers;
