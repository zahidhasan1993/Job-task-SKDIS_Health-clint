import React, { useState } from "react";
import Swal from "sweetalert2";

const AllUser = ({ user, setUsers }) => {
  const { _id } = user;
  // console.log(_id);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;

    const user = {
      name,
      email,
      phone,
    };

    fetch(`http://localhost:5000/updateuser/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Updated",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
          fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
          setIsOpen(false);
        }
      });
    console.log(_id);
  };
  const handleDelete = () => {
    fetch(`http://localhost:5000/userdelete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Deleted",
            showConfirmButton: false,
            timer: 1500,
          });
          fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
        }
        // console.log(data);
      });
  };
  return (
    <div className="w-full mx-auto rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4 space-y-4">
        <div className="font-bold text-xl mb-2">Name: {user.name}</div>
        <p className="text-gray-700 text-base">Email: {user.email}</p>
        <p className="text-gray-700 text-base">Phone: {user.phone}</p>
      </div>
      <div className="px-6 py-4">
        <button
          onClick={openModal}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-blue-950 hover:text-white"
        >
          Edit
        </button>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
            <div className="bg-white p-8 rounded shadow-lg z-10">
              <h2 className="text-xl font-semibold mb-4">Update User</h2>
              <form onSubmit={handleSubmit} className="max-w-xs mx-auto">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Update User
                </button>
              </form>
              <button
                onClick={closeModal}
                className="px-4 py-2 mt-5 bg-red-500 text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
        <button
          onClick={handleDelete}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-blue-950 hover:text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AllUser;
