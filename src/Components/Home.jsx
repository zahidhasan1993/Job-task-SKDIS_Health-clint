import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import AllUser from "./AllUser";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://skdis-health-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
//   console.log(users);
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <h1 className="text-6xl text-amber-600 text-center my-20 ">
        ---All Users---
      </h1>
      <div className="md:grid md:grid-cols-4 gap-4">
        {users.map((user) => (
          <AllUser key={user._id} user={user} setUsers={setUsers}></AllUser>
        ))}
      </div>
    </div>
  );
};

export default Home;
