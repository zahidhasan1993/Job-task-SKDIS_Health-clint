import React from "react";
import Swal from "sweetalert2";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Access form data using DOM manipulation
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;

    const newUser = {
      name,
      email,
      phone,
    };
    // Do something with the form data (e.g., send it to a server)
    // console.log("Submitted:", name, email, password);

    fetch("http://localhost:5000/adduser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "New User Added",
      showConfirmButton: false,
      timer: 1500,
    });
    e.target.reset();
    // Reset the form
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xs mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
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
        <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
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
        Add User
      </button>
    </form>
  );
};

export default Form;
