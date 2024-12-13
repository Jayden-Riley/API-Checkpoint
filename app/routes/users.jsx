import { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  // State to store list of users
  let [listOfUsers, setListOfUsers] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch users data using Axios
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  // Render the user list with pagination
  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold text-center mb-4">User List</h1>
      <ul className="space-y-8">
        {listOfUsers.map((user) => (
          <li
            key={user.id}
            className="p-4 bg-gray-200  rounded-lg shadow-black shadow-lg"
          >
            <h2 className="text-xl text-pink-600 font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
